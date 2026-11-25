// 章 11 的 ProductCard：props 不動，價格從本章起用 $ 顯示（DummyJSON 是美元）
type ProductCardProps = {
  name: string
  price: number
  image: string
  onSale?: boolean
}

function ProductCard({ name, price, image, onSale = false }: ProductCardProps) {
  return (
    <div className="card">
      <img className="card-image" src={image} alt={name} />
      <h3 className="card-name">{name}</h3>
      <p className="card-price">$ {price.toLocaleString()}</p>
      {onSale && <span className="card-badge">特價</span>}
    </div>
  )
}

export default ProductCard
