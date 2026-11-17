// 第 16 章練習起點（p42）：章 15 練習完成的樣子
// 現在有兩份定義：schema.ts 一份、types.ts 的 Product interface 一份——把它們收成一份（題目見 lab）

import { useEffect, useState } from 'react'
import { z } from 'zod'
import { fetchProducts } from './api'
import ProductCard from './components/ProductCard'
import { productsResponseSchema } from './schema'
import type { Product } from './types'

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
