// 照 DummyJSON 實際回傳的欄位寫（不是章 5 的 Product）
// 外層包一層 { products, total, skip, limit }；價格是美元小數

export interface Product {
  id: number
  title: string
  price: number
  category: string
  thumbnail: string
  brand?: string
  rating: number
  discountPercentage: number
  availabilityStatus: string
}

export interface ProductsResponse {
  products: Product[]
  total: number
  skip: number
  limit: number
}
