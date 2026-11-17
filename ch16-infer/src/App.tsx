// 第 16 章畫面：型別從 schema 推導（src/infer.ts），沒有手寫的 Product interface
import { useEffect, useState } from 'react'
import { z } from 'zod'
import ProductCard from './components/ProductCard'
import type { Product } from './infer'
import { productsResponseSchema } from './product-schema'
import { SOURCE } from './source'

type LoadState =
  | { status: 'loading' }
  | { status: 'error'; message: string }
  | { status: 'success'; products: Product[] }

function App() {
  const [state, setState] = useState<LoadState>({ status: 'loading' })

  useEffect(() => {
    fetch(SOURCE)
      .then((res) => res.json())
      .then((raw: unknown) => {
        const result = productsResponseSchema.safeParse(raw)
        if (!result.success) {
          setState({ status: 'error', message: z.prettifyError(result.error) })
          return
        }
        setState({ status: 'success', products: result.data.products })
      })
      .catch((error: unknown) => setState({ status: 'error', message: String(error) }))
  }, [])

  if (state.status === 'loading') {
    return <p>載入中…</p>
  }
  if (state.status === 'error') {
    return <pre className="error">資料格式不對：{'\n'}{state.message}</pre>
  }

  return (
    <div className="page">
      <div className="product-list">
        {state.products.map((product) => (
          <ProductCard key={product.id} name={product.title} price={product.price} image={product.thumbnail} />
        ))}
      </div>
    </div>
  )
}

export default App
