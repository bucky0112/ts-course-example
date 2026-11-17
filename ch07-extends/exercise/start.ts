// 第 7 章練習：從 Product 延伸出後台用的版本
// 1. 用 extends 改寫 AdminProduct，不要重複欄位
// 2. 在 Product 加欄位，確認兩邊同步
// 3. 在 AdminProduct 把 id 覆寫成 string，看錯誤訊息

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

// 後台的商品：上面那些全部都要，再加 cost 和 supplier
interface AdminProduct {
  readonly id: number
  name: string
  price: number
  discountPrice?: number
  category: Category
  stock: Stock
  cost: number
  supplier: string
}
