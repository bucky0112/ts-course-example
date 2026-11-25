// 3. 呼叫端：資料邏輯都在 hook 裡，元件只負責畫面
// state 的型別是 LoadState，章 8 的窄化在 hook 外面照樣有效

import ProductCard from './components/ProductCard'
import { useProducts } from './use-products'
import { useToggle } from './use-toggle'

function App() {
  const state = useProducts()
  const [onlyDiscount, toggleOnlyDiscount] = useToggle()

  if (state.status === 'loading') {
    return <p>載入中…</p>
  }
  if (state.status === 'error') {
    return <pre className="error">資料格式不對：{'\n'}{state.message}</pre>
  }

  // 走到這裡 state 已經窄化成 success，才讀得到 products
  const visible = onlyDiscount
    ? state.products.filter((product) => product.discountPercentage >= 15)
    : state.products

  return (
    <div className="page">
      <header className="site-header">
        <h1>商品列表</h1>
      </header>
      <div className="toolbar">
        <button onClick={toggleOnlyDiscount}>{onlyDiscount ? '顯示全部商品' : '只看折扣 15% 以上'}</button>
      </div>
      <div className="product-list">
        {visible.map((product) => (
          <ProductCard
            key={product.id}
            name={product.title}
            price={product.price}
            image={product.thumbnail}
            onSale={product.discountPercentage >= 15}
          />
        ))}
      </div>
    </div>
  )
}

export default App
