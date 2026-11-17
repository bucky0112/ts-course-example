// 第 14 章練習起點（p28）：商品清單還是寫死的
// 1. 把下面的 useEffect 取消註解，改成從 fetchProducts() 取得商品（TS 課沒教 useEffect，這段給你）
// 2. 在 types.ts 照 DummyJSON 的欄位寫 ProductsResponse，標在 fetchProducts 的回傳值上，
//    再把 title、thumbnail 轉成 ProductCard 的 props（題目見 lab）

import { useState } from 'react'
// import { useEffect } from 'react'
// import { fetchProducts } from './api'
import ProductCard from './components/ProductCard'

type CardData = { id: number; name: string; price: number; image: string }

const sampleProducts: CardData[] = [
  { id: 1, name: '經典帆布後背包', price: 1280, image: '/backpack.jpg' },
  { id: 2, name: '輕量筆電內袋', price: 890, image: '/sleeve.jpg' },
]

function App() {
  const [products] = useState<CardData[]>(sampleProducts)

  // useEffect(() => {
  //   fetchProducts().then((data) => setProducts(data.products))
  // }, [])

  return (
    <div className="page">
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} name={product.name} price={product.price} image={product.image} />
        ))}
      </div>
    </div>
  )
}

export default App
