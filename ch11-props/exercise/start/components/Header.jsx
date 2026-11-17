function Header({ title, cartCount = 0 }) {
  return (
    <header className="site-header">
      <h1>{title}</h1>
      <span className="cart-count">購物車 {cartCount}</span>
    </header>
  )
}

export default Header
