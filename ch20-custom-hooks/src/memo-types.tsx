// 4. useMemo / useCallback 的型別
// 開了 React Compiler 之後，新寫的程式通常不用手寫這兩個（compiler 會自動做快取）
// 但舊專案裡到處都是，看得懂它們的型別怎麼來還是有用

import { useCallback, useMemo, useState } from 'react'
import type { Product } from './product-schema'

export function CartSummary({ products }: { products: Product[] }) {
  const [selectedId, setSelectedId] = useState<number | null>(null)

  // useMemo：型別從回傳值推出來。滑鼠移到 total → number
  const total = useMemo(() => products.reduce((sum, product) => sum + product.price, 0), [products])

  // useCallback：參數沒有上下文可以推 → TS7006 Parameter 'id' implicitly has an 'any' type.
  const selectWrong = useCallback((id) => setSelectedId(id), [])

  // 跟一般函式一樣，參數自己標
  const select = useCallback((id: number) => setSelectedId(id), [])

  return (
    <div>
      <p>合計：$ {total.toLocaleString()}</p>
      <p>目前選的：{selectedId ?? '還沒選'}</p>
      {products.map((product) => (
        <button key={product.id} onClick={() => select(product.id)}>
          {product.title}
        </button>
      ))}
    </div>
  )
}

// 開了 React Compiler 的寫法：拿掉 useMemo / useCallback，型別標註一個都不會少
export function CartSummaryWithCompiler({ products }: { products: Product[] }) {
  const [selectedId, setSelectedId] = useState<number | null>(null)

  const total = products.reduce((sum, product) => sum + product.price, 0)
  const select = (id: number) => setSelectedId(id)

  return (
    <div>
      <p>合計：$ {total.toLocaleString()}</p>
      <p>目前選的：{selectedId ?? '還沒選'}</p>
      {products.map((product) => (
        <button key={product.id} onClick={() => select(product.id)}>
          {product.title}
        </button>
      ))}
    </div>
  )
}
