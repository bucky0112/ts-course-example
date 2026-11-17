// p6 可選與預設值
// p5 的 CardProps 裡 onSale 是必填，App 裡沒傳 onSale 的卡片都會紅。
// 把它變成可選（回收章 10 的 Partial），再給預設值：
// - 滑鼠移到參數列的 onSale：boolean | undefined（還沒給預設值時）
// - 給了 = false 之後，函式裡的 onSale 是 boolean

import type { Product } from './types'

type CardProps = Pick<Product, 'name' | 'price' | 'image'> & Partial<Pick<Product, 'onSale'>>

export function SaleCard({ name, price, image, onSale = false }: CardProps) {
  return (
    <div className="card">
      <img className="card-image" src={image} alt={name} />
      <h3 className="card-name">{name}</h3>
      <p className="card-price">NT$ {price.toLocaleString()}</p>
      {onSale && <span className="card-badge">特價</span>}
    </div>
  )
}

// 可選但沒有預設值的數字，直接拿來用 → TS18048（回收章 5 的可選欄位）
type PriceTagProps = { price: number; discountPrice?: number }

export function PriceTag({ price, discountPrice }: PriceTagProps) {
  return (
    <p>
      原價 {price.toLocaleString()}，特價 {discountPrice.toLocaleString()}
    </p>
  )
}
