// 第 6 章解答

type Category = 'backpack' | 'sleeve' | 'accessory' | 'pouch'
type Stock = number | 'unknown'

interface Product {
  readonly id: number
  name: string
  price: number
  discountPrice?: number
  category: Category
  stock: Stock
}

const products: Product[] = [
  { id: 1, name: '經典帆布後背包', price: 1280, discountPrice: 1080, category: 'backpack', stock: 12 },
  { id: 2, name: '筆電內袋', price: 680, category: 'sleeve', stock: 'unknown' },
  { id: 3, name: '皮革鑰匙圈', price: 350, category: 'accessory', stock: 40 },
]

// 第 4 題：對 stock 直接做數字運算。這行的紅線是刻意留下的（TS2362），第 8 章再解
// 訊息：算術運算的左側必須是 'any'、'number'、'bigint' 或列舉型別
function remainingAfterSale(product: Product) {
  return product.stock - 1
}
