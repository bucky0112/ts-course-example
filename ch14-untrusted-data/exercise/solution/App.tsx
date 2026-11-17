// 第 14 章解答：商品從 API 取得，回傳值標上 ProductsResponse，App 把 title、thumbnail 轉成 ProductCard 的 props
// 載入狀態用章 8 的可辨識聯集：loading／error／success，只有 success 拿得到商品
// npm run check 0 個錯誤；把 source.ts 換成 '/products.broken.json' 也還是 0 個錯誤——型別檢查看不到資料

import { useEffect, useState } from 'react'
import { fetchProducts } from './api'
import ProductCard from './components/ProductCard'
import type { Product } from './types'

type LoadState =
  | { status: 'loading' }
  | { status: 'error'; message: string }
  | { status: 'success'; products: Product[] }

function App() {
  const [state, setState] = useState<LoadState>({ status: 'loading' })

  useEffect(() => {
    fetchProducts()
      .then((data) => setState({ status: 'success', products: data.products }))
      .catch((error: unknown) => setState({ status: 'error', message: String(error) }))
  }, [])

  if (state.status === 'loading') {
    return <p>載入中…</p>
  }
  if (state.status === 'error') {
    return <p>載入失敗：{state.message}</p>
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
