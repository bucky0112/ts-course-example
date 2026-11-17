// p30 interface：抽出來，給它一個名字
// 現場動作：在 interface 加一個欄位（例如 stock: number），看下面哪些地方一起紅線

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
]

function findByKeyword(list: Product[], keyword: string) {
  return list.filter((item) => item.name.includes(keyword))
}
