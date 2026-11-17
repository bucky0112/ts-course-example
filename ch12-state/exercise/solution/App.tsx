// 第 12 章解答：三個狀態裡只有商品清單與選中商品需要泛型；搜尋框的 useRef 存取前先檢查 null
// npm run check 0 個錯誤
// 試試看：把下面「目前選中」那行的 selected ? selected.name : '還沒有選' 改成 selected.name → TS18047

import { useRef, useState } from 'react'
import Header from './components/Header'
import ProductList from './components/ProductList'
import { sampleProducts } from './data'
import type { Product } from './types'

function App() {
  const [query, setQuery] = useState('') // 有初始值，推得出 string，不用標
  const [products, setProducts] = useState<Product[]>([]) // 空陣列推成 never[]，要標
  const [selected, setSelected] = useState<Product | null>(null) // 初始值 null，要標
  const searchRef = useRef<HTMLInputElement>(null)

  const visible = products.filter((product) => product.name.includes(query))

  function focusSearch() {
    if (searchRef.current) {
      searchRef.current.focus()
    }
  }

  return (
    <div className="page">
      <Header title="商品列表" cartCount={2} />

      <div className="toolbar">
        <input ref={searchRef} value={query} onChange={(e) => setQuery(e.target.value)} placeholder="搜尋商品" />
        <button onClick={focusSearch}>搜尋</button>
        <button onClick={() => setProducts(sampleProducts)}>載入商品</button>
        <button onClick={() => setSelected(visible[0] ?? null)}>選第一個</button>
      </div>

      <p>目前選中：{selected ? selected.name : '還沒有選'}</p>

      <ProductList products={visible} />
    </div>
  )
}

export default App
