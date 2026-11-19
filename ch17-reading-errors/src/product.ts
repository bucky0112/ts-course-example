// 本章共用的商品型別（跟第 10 章同一份）

export type Category = 'backpack' | 'sleeve' | 'accessory' | 'pouch'

export interface Product {
  readonly id: number
  name: string
  price: number
  onSale: boolean
  category: Category
}
