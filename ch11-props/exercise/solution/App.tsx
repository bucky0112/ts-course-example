// 第 11 章解答：三個元件都是 .tsx，props 都有型別，npm run check 0 個錯誤
// 試試看：把下面 <Header /> 的 title 拿掉，紅線出現在這一行（使用端），是 TS2741

import Header from './components/Header'
import ProductList from './components/ProductList'
import type { Product } from './types'

const products: Product[] = [
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
