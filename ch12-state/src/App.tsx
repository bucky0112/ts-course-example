// 第 12 章畫面：商品清單放在狀態裡，按鈕載入本機資料
import { useState } from 'react'
import ProductCard from './components/ProductCard'
import { sampleProducts } from './data'
import type { Product } from './types'

function App() {
  const [products, setProducts] = useState<Product[]>([])

  return (
    <div className="page">
      <header className="site-header">
        <h1>商品列表</h1>
      </header>
      <button onClick={() => setProducts(sampleProducts)}>載入商品</button>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} name={product.name} price={product.price} image={product.image} onSale={product.onSale} />
        ))}
      </div>
    </div>
  )
}

export default App
