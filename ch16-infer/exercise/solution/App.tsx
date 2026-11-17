// 第 16 章解答：Product 從 schema 推導（schema.ts 最下面），手寫的 interface 刪掉了
// npm run check 0 個錯誤
// 試試看：在 schema.ts 的 productSchema 加上 brand: z.string().optional()，
//         再到下面 <ProductCard name={product.title} 改成 name={product.brand.toUpperCase()} → TS18048

import { useEffect, useState } from 'react'
import { z } from 'zod'
import { fetchProducts } from './api'
import ProductCard from './components/ProductCard'
import { productsResponseSchema } from './schema'
import type { Product } from './schema'

type LoadState =
  | { status: 'loading' }
  | { status: 'error'; message: string }
  | { status: 'success'; products: Product[] }

function App() {
  const [state, setState] = useState<LoadState>({ status: 'loading' })

  useEffect(() => {
    fetchProducts()
      .then((raw) => {
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
