import type { Product } from '../types'
import ProductCard from './ProductCard'

type ProductListProps = {
  products: Product[]
}

function ProductList({ products }: ProductListProps) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
          onSale={product.onSale}
        />
      ))}
    </div>
  )
}

export default ProductList
