// p30 interface：抽出來，給它一個名字
// 試試看：在 interface 加一個欄位（例如 weight: number），會出現 3 條 TS2741，
// 紅在三個物件字面量上：product、products 裡的兩筆新物件。
// list: Product[] 不會紅：它只是說「傳進來的要是 Product」，本身沒有寫出任何物件，
// 沒有東西缺欄位。改一次 interface，三處的型別同時生效，缺欄位的物件才會被點名。

interface Product {
  id: number
  name: string
  price: number
  category: string
}

const product: Product = { id: 1, name: '經典帆布後背包', price: 1280, category: 'backpack' }

const products: Product[] = [
  product,
  { id: 2, name: '筆電內袋', price: 680, category: 'sleeve' },
  { id: 3, name: '皮革鑰匙圈', price: 350, category: 'accessory' },
]

function findByKeyword(list: Product[], keyword: string) {
  return list.filter((item) => item.name.includes(keyword))
}
