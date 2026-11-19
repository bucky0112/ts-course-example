import React from 'react'

interface HeaderProps {
  title: string
  cartCount: number
}

const Header: React.FC<HeaderProps> = ({ title, cartCount }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <span className="cart">購物車 {cartCount}</span>
    </header>
  )
}

export default Header
