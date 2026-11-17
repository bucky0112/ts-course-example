// 第 9 章練習：把商品與訂單的查找函式合成一個
// 1. 先用 any 合成，記錄失去了什麼
// 2. 改成泛型，確認提示回來
// 3. 加 extends 限制

interface Product {
  readonly id: number
  name: string
  price: number
}

interface Order {
  readonly id: number
  productIds: number[]
  total: number
}

const products: Product[] = [
  { id: 1, name: '經典帆布後背包', price: 1280 },
  { id: 2, name: '筆電內袋', price: 680 },
]

const orders: Order[] = [{ id: 101, productIds: [1, 2], total: 1960 }]

function findProductById(list: Product[], id: number) {
  return list.find((item) => item.id === id)
}

function findOrderById(list: Order[], id: number) {
  return list.find((item) => item.id === id)
}

const product = findProductById(products, 1)
const order = findOrderById(orders, 101)
