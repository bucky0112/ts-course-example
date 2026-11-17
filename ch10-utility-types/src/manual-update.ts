// p64 更新只帶要改的欄位，所以全部都得是可選的
// 問題不是打字多：手寫的形狀跟 Product 沒有連在一起，Product 加欄位這裡不會有

type Category = 'backpack' | 'sleeve' | 'accessory' | 'pouch'

interface Product {
  readonly id: number
  name: string
  price: number
  onSale: boolean
  category: Category
}

interface ProductUpdate {
  name?: string
  price?: number
  onSale?: boolean
}
