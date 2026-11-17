import type { ReactNode } from 'react'

type HeaderProps = {
  title: string
  cartCount?: number
  children: ReactNode // 不用 React.FC，明確標註 children
}

function Header({ title, cartCount = 0, children }: HeaderProps) {
  return (
    <header className="site-header">
      <h1>{title}</h1>
      <span className="cart-count">購物車 {cartCount}</span>
      {children}
    </header>
  )
}

export default Header
