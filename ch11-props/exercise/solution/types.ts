// 章 10 的 Product，補上 image
export type Category = 'backpack' | 'sleeve' | 'accessory' | 'pouch'

export interface Product {
  readonly id: number
  name: string
  price: number
  image: string
  onSale: boolean
  category: Category
}
