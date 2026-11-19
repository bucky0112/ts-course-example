import type { Product } from '../types'
import { formatPrice } from '../utils'

interface ProductCardProps {
  product: Pick<Product, 'id' | 'title' | 'price' | 'thumbnail' | 'rating'>
  onSelect: (id: number) => void
  onAdd: (id: number) => void
}

function ProductCard({ product, onSelect, onAdd }: ProductCardProps) {
  return (
    <div className="card">
      <img src={product.thumbnail} alt={product.title} onClick={() => onSelect(product.id)} />
      <h3>{product.title}</h3>
      <p>
        {formatPrice(product.price)}・★ {(product.rating as number).toFixed(1)}
      </p>
      <button onClick={() => onAdd(product.id)}>加入購物車</button>
    </div>
  )
}

export default ProductCard
