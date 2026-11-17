// 第 12 章練習起點（p14）：章 11 的解答，另外多一份本機商品資料 sampleProducts（data.ts）
// 為搜尋字串、商品清單、目前選中的商品加上狀態，再為搜尋框加上 useRef（題目見 lab）

import Header from './components/Header'
import ProductList from './components/ProductList'
import { sampleProducts } from './data'

function App() {
  return (
    <div className="page">
      <Header title="商品列表" cartCount={2} />
      <ProductList products={sampleProducts} />
    </div>
  )
}

export default App
