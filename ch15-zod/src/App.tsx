// 第 15 章畫面：fetch 之後用 safeParse 驗證
// 把 src/source.ts 換成 '/products.broken.json'：畫面顯示錯誤訊息，不再當機（p34）

import { useEffect, useState } from 'react'
import { z } from 'zod'
import ProductCard from './components/ProductCard'
import { productsResponseSchema } from './product-schema'
import { SOURCE } from './source'
import type { Product } from './types'

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
        if (result.success) {
          setState({ status: 'success', products: result.data.products })
        } else {
          setState({ status: 'error', message: z.prettifyError(result.error) })
        }
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
