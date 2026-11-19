// 本章共用的商品型別與「API 回傳的文字」

export type Category = 'backpack' | 'sleeve' | 'accessory' | 'pouch'

export interface Product {
  readonly id: number
  name: string
  price: number
  onSale: boolean
  category: Category
}

// 假裝這是 API 回傳的文字：跟第 14 章一樣，第 2 筆少了 price
export const responseText =
  '[{"id":1,"name":"經典帆布後背包","price":1280,"onSale":true,"category":"backpack"},' +
  '{"id":2,"name":"輕量筆電內袋","onSale":false,"category":"sleeve"}]'
