// 第 11 章練習起點（p7）：JavaScript 版商品頁，三個元件都還沒有型別
// 把 components/ 底下三個 .jsx 改成 .tsx，補上 props 型別（題目見 lab）
// 改完後在專案根目錄跑 npm run check

import Header from './components/Header'
import ProductList from './components/ProductList'

const products = [
  { id: 1, name: '經典帆布後背包', price: 1280, image: '/backpack.jpg', onSale: true, category: 'backpack' },
  { id: 2, name: '輕量筆電內袋', price: 890, image: '/sleeve.jpg', onSale: false, category: 'sleeve' },
  { id: 3, name: '皮革證件套', price: 1450, image: '/cardholder.jpg', onSale: false, category: 'accessory' },
]

function App() {
  return (
    <div className="page">
      <Header title="商品列表" cartCount={2} />
      <ProductList products={products} />
    </div>
  )
}

export default App
