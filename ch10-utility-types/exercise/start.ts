// 第 10 章練習：同一個 Product，做出新增用與更新用的形狀
// 1. 用 Omit 做出 NewProduct
// 2. 用 Partial 做出 ProductUpdate
// 3. Product 加欄位，確認三個型別同步

type Category = 'backpack' | 'sleeve' | 'accessory' | 'pouch'

interface Product {
  readonly id: number
  name: string
  price: number
  onSale: boolean
  category: Category
}

// 手寫的版本：Product 加欄位，這兩個都不會跟著變
interface NewProduct {
  name: string
  price: number
  onSale: boolean
  category: Category
}

interface ProductUpdate {
  name?: string
  price?: number
  onSale?: boolean
  category?: Category
}
