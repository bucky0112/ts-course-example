import { useEffect, useRef, useState } from 'react'
import { fetchProducts } from './api'
import { addToCart, loadCart, saveCart } from './cart'
import Header from './components/Header'
import ProductCard from './components/ProductCard'
import ProductDetail from './components/ProductDetail'
import type { CartItem, Product } from './types'
import { SORT_KEYS, sortProducts } from './utils'

function App() {
  const [products, setProducts] = useState<Product[]>([])
  const [query, setQuery] = useState('')
  const [sortKey, setSortKey] = useState<string>('price')
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const [cart, setCart] = useState<CartItem[]>(loadCart)
  const searchRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    fetchProducts().then(setProducts)
  }, [])

  useEffect(() => {
    saveCart(cart)
  }, [cart])

  const visible = sortProducts(
    products.filter((product) => product.title.toLowerCase().includes(query.toLowerCase())),
    sortKey,
  )
  const selected = products.find((product) => product.id === selectedId)

  function clearSearch() {
    setQuery('')
    if (searchRef.current) {
      searchRef.current.focus()
    }
  }

  return (
    <div className="page">
      <Header title="商品瀏覽" cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} />
      <div className="toolbar">
        <input
          ref={searchRef}
          value={query}
          placeholder="搜尋商品"
          onChange={(e) => setQuery((e.target as HTMLInputElement).value)}
        />
        <button onClick={clearSearch}>清除</button>
        <select value={sortKey} onChange={(e) => setSortKey(e.target.value)}>
          {SORT_KEYS.map((key) => (
            <option key={key} value={key}>
              {key === 'price' ? '價格高到低' : '評分高到低'}
            </option>
          ))}
        </select>
      </div>
      {selected && <ProductDetail product={selected} onClose={() => setSelectedId(null)} />}
      <div className="grid">
        {visible.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onSelect={setSelectedId}
            onAdd={(id) => setCart((items) => addToCart(items, id))}
          />
        ))}
      </div>
    </div>
  )
}

export default App
