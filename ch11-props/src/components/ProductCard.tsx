// p5–p6 完成版：props 從 Product 裁出來，不重新列一次欄位
// onSale 用 Partial 變成可選，再給預設值 false（p6）

import type { Product } from '../types'

type ProductCardProps = Pick<Product, 'name' | 'price' | 'image'> & Partial<Pick<Product, 'onSale'>>

function ProductCard({ name, price, image, onSale = false }: ProductCardProps) {
  return (
    <div className="card">
      <img className="card-image" src={image} alt={name} />
      <h3 className="card-name">{name}</h3>
      <p className="card-price">NT$ {price.toLocaleString()}</p>
      {onSale && <span className="card-badge">特價</span>}
    </div>
  )
}

export default ProductCard
