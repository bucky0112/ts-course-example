// 第 13 章解答：兩個事件處理器都抽成具名函式，參數型別用 p19 的懸停查法查出來；Header 能包內容
// npm run check 0 個錯誤
// 試試看：把 handleQueryChange 裡的 e.target.value 打成 e.target.valu → TS2551（Did you mean 'value'?）

import { useRef, useState } from 'react'
import type { ChangeEvent, MouseEvent } from 'react'
import Header from './components/Header'
import ProductList from './components/ProductList'
import { sampleProducts } from './data'
import type { Product } from './types'

function App() {
  const [query, setQuery] = useState('')
  const [products, setProducts] = useState<Product[]>([])
  const [selected, setSelected] = useState<Product | null>(null)
  const searchRef = useRef<HTMLInputElement>(null)

  const visible = products.filter((product) => product.name.includes(query))

  function focusSearch() {
    if (searchRef.current) {
      searchRef.current.focus()
    }
  }

  function handleQueryChange(e: ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value)
  }

  function handleLoad(e: MouseEvent<HTMLButtonElement>) {
    setProducts(sampleProducts)
    e.currentTarget.disabled = true // 只能載入一次
  }

  return (
    <div className="page">
      <Header title="商品列表" cartCount={2}>
        <p>本週新品 3 件</p>
      </Header>

      <div className="toolbar">
        <input ref={searchRef} value={query} onChange={handleQueryChange} placeholder="搜尋商品" />
        <button onClick={focusSearch}>搜尋</button>
        <button onClick={handleLoad}>載入商品</button>
        <button onClick={() => setSelected(visible[0] ?? null)}>選第一個</button>
      </div>

      <p>目前選中：{selected ? selected.name : '還沒有選'}</p>

      <ProductList products={visible} />
    </div>
  )
}

export default App
