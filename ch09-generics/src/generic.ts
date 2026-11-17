// p59 泛型 <T>：我現在還不知道是什麼，但你傳進來的時候會知道
//
// 注意：簡報上的 findById<T> 沒有加限制，函式內的 item.id 會紅線（TS2339）
// 因為 T 可能是任何東西，TypeScript 不能保證它有 id → 這就是 p60 要加限制的原因

interface Product {
  id: number
  name: string
}

interface Order {
  id: number
  total: number
}

function findByIdUnconstrained<T>(list: T[], id: number): T | undefined {
  return list.find((item) => item.id === id)
}

function findById<T extends { id: number }>(list: T[], id: number): T | undefined {
  return list.find((item) => item.id === id)
}

const products: Product[] = [{ id: 1, name: '經典帆布後背包' }]
const orders: Order[] = [{ id: 1, total: 1960 }]

const product = findById(products, 1) // 滑鼠移上去：Product | undefined
const order = findById(orders, 1) // 滑鼠移上去：Order | undefined
