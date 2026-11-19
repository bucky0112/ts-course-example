import type { Product } from '../types'
import { formatPrice } from '../utils'

interface ProductDetailProps {
  product: Product
  onClose: () => void
}

function ProductDetail({ product, onClose }: ProductDetailProps) {
  return (
    <div className="detail">
      <h2>{product.title}</h2>
      <p className="brand">{product.brand.toUpperCase()}</p>
      <p>
        {product.category}・{formatPrice(product.price)}
      </p>
      <button onClick={onClose}>關閉</button>
    </div>
  )
}

export default ProductDetail
