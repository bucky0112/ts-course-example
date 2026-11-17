// 第 9 章解答

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

// 原本兩個函式已刪掉，合成這一個
function findById<T extends { id: number }>(list: T[], id: number): T | undefined {
  return list.find((item) => item.id === id)
}

const product = findById(products, 1) // Product | undefined
const order = findById(orders, 101) // Order | undefined

// ── 試試看 ──
// 1. 在 product?. 後面打點，自動完成會列出 name、price
// 2. 取消註解：沒有 id 的資料會紅線
// const coupons = [{ code: 'NEW100' }]
// findById(coupons, 1)
// 3. 把 T 全部改名成 Item，功能完全一樣：T 只是一個名字，不是關鍵字
