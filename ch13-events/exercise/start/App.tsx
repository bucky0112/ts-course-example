// 第 13 章練習起點（p21）：章 12 的解答。搜尋框的 onChange 與「載入商品」按鈕的 onClick 都直接寫在 JSX 裡，
// TS 知道 e 的型別；把它們抽成具名函式，就會失去線索（題目見 lab）

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
        <button
          onClick={(e) => {
            setProducts(sampleProducts)
            e.currentTarget.disabled = true // 只能載入一次
          }}
        >
          載入商品
        </button>
        <button onClick={() => setSelected(visible[0] ?? null)}>選第一個</button>
      </div>

      <p>目前選中：{selected ? selected.name : '還沒有選'}</p>

      <ProductList products={visible} />
    </div>
  )
}

export default App
