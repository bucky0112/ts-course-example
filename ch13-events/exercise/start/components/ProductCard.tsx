import type { Product } from '../types'

// 從 Product 裁出來，Product 加欄位時這裡不用改
type ProductCardProps = Pick<Product, 'name' | 'price' | 'image' | 'onSale'>

function ProductCard({ name, price, image, onSale }: ProductCardProps) {
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
