// 第 15 章練習起點（p35）：章 14 練習完成的樣子
// 把 source.ts 換成 '/products.broken.json'，畫面會當機——這章要讓它改成顯示錯誤訊息（題目見 lab）

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
