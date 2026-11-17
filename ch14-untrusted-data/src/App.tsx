// p26 故意讓資料少一個欄位：把 src/source.ts 換成 '/products.broken.json'
// npm run check 照樣 0 個錯誤，畫面卻當機：
//   TypeError: Cannot read properties of undefined (reading 'toLocaleString')
// 爆在 ProductCard 的 price.toLocaleString()，真正的原因是資料第 2 筆少了 price——
// 型別說有，實際沒有

import { useEffect, useState } from 'react'
import ProductCard from './components/ProductCard'
import { SOURCE } from './source'
import type { Product, ProductsResponse } from './types'

function App() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch(SOURCE)
      .then((res) => res.json())
      .then((data: ProductsResponse) => setProducts(data.products))
  }, [])

  return (
    <div className="page">
      <header className="site-header">
        <h1>商品列表</h1>
      </header>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} name={product.title} price={product.price} image={product.thumbnail} />
        ))}
      </div>
    </div>
  )
}

export default App
