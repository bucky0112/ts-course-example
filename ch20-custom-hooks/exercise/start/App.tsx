// 第 20 章練習起點：所有邏輯都擠在 App 裡
// 1. 把「抓資料 + 驗證」抽成 useProducts()，放到新檔 use-products.ts
//    回傳型別寫出來：LoadState
// 2. （有餘力）把「關鍵字 + 篩選」抽成 useSearch(products)，回傳 [keyword, setKeyword, filtered]
//    回傳陣列記得 as const，不然呼叫端解構出來的型別會混在一起
// 3. 完成後 App 只剩畫面，npm run check 一樣 0 個錯誤

import { useEffect, useState } from 'react'
import { z } from 'zod'
import ProductCard from './components/ProductCard'
import { type Product, productsResponseSchema } from './schema'
import { SOURCE } from './source'

type LoadState =
  | { status: 'loading' }
  | { status: 'error'; message: string }
  | { status: 'success'; products: Product[] }

function App() {
  const [state, setState] = useState<LoadState>({ status: 'loading' })
  const [keyword, setKeyword] = useState('')

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

  const filtered = state.products.filter((product) =>
    product.title.toLowerCase().includes(keyword.trim().toLowerCase()),
  )

  return (
    <div className="page">
      <div className="toolbar">
        <input value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder="搜尋商品" />
      </div>
      <div className="product-list">
        {filtered.map((product) => (
          <ProductCard key={product.id} name={product.title} price={product.price} image={product.thumbnail} />
        ))}
      </div>
    </div>
  )
}

export default App
