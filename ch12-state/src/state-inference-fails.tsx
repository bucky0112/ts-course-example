// p11 推不出來的兩種情況
// 1. 初始值 null：狀態被推成 null，之後 set 一個商品 → TS2345
// 2. 初始值空陣列：狀態被推成 never[]（對照章 4 p24 最後一行：export 出去的空陣列也是 never[]）
//    set 一個含商品的陣列 → TS2322「Type 'Product' is not assignable to type 'never'.」
//    map 裡讀 p.id、p.name → 各一條 TS2339（p 的型別是 never）

import { useState } from 'react'
import { sampleProducts } from './data'

export function BrokenState() {
  const [selected, setSelected] = useState(null)
  const [products, setProducts] = useState([])

  return (
    <div>
      <button onClick={() => setSelected(sampleProducts[0])}>選第一個</button>
      <button onClick={() => setProducts([sampleProducts[0]])}>加入一個商品</button>
      <p>{selected === null ? '還沒有選' : '選好了'}</p>
      <ul>
        {products.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </div>
  )
}
