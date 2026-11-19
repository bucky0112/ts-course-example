export interface Product {
  id: number
  title: string
  price: number
  category: string
  thumbnail: string
  brand: string
  rating: number
}

export interface CartItem {
  productId: number
  quantity: number
}
