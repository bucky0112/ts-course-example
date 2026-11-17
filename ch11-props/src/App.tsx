import ProductCard from './components/ProductCard'

function App() {
  return (
    <div className="page">
      <header className="site-header">
        <h1>商品列表</h1>
      </header>

      <div className="product-list">
        <ProductCard name="經典帆布後背包" price={1280} image="/backpack.jpg" onSale />
        <ProductCard name="輕量筆電內袋" price={890} image="/sleeve.jpg" />
        <ProductCard name="皮革證件套" price={1450} image="/cardholder.jpg" />
      </div>
    </div>
  )
}

export default App
