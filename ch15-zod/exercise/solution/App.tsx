// 第 15 章解答：fetch 之後用 safeParse 驗證，失敗分支用 z.prettifyError 顯示錯誤，不再當機
// types.ts 的 Product interface 刻意留著——現在有兩份定義（schema 一份、interface 一份），章 16 處理
// npm run check 0 個錯誤
// 試試看：把下面 if (!result.success) 那段拿掉，直接用 result.data.products → TS18048

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
