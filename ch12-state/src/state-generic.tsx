// p12 useState<T>：補上泛型——就是章 9 學過的 <T>
// 補完之後 set 的那兩行都不紅了。
// 但 selected 可能是 null：直接讀 selected.name → TS18047（下面刻意留著）

import { useState } from 'react'
import { sampleProducts } from './data'
import type { Product } from './types'

export function FixedState() {
  const [selected, setSelected] = useState<Product | null>(null)
  const [products, setProducts] = useState<Product[]>([])

  return (
    <div>
      <button onClick={() => setSelected(sampleProducts[0])}>選第一個</button>
      <button onClick={() => setProducts(sampleProducts)}>載入商品</button>
      <p>目前選中：{selected.name}</p>
      <ul>
        {products.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </div>
  )
}
