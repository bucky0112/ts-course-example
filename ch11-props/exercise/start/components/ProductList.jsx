import ProductCard from './ProductCard'

function ProductList({ products }) {
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
