// p43 兩個很像：後台的商品，就是商品再多 cost、supplier 兩個欄位
// p44 extends：「就是 A，再多幾個」
// 現場動作：在 Product 加一個欄位（例如 weight: number），product 和 adminProduct 會同時紅線（TS2741）
// adminProduct 刻意把欄位全部寫出來、不用 ...product 展開，否則它不會跟著紅

interface Product {
  readonly id: number
  name: string
  price: number
  image: string
  onSale: boolean
  category: 'backpack' | 'sleeve' | 'accessory' | 'pouch'
}

interface AdminProduct extends Product {
  cost: number
  supplier: string
}

const product: Product = {
  id: 1,
  name: '經典帆布後背包',
  price: 1280,
  image: '/backpack.jpg',
  onSale: true,
  category: 'backpack',
}

const adminProduct: AdminProduct = {
  id: 1,
  name: '經典帆布後背包',
  price: 1280,
  image: '/backpack.jpg',
  onSale: true,
  category: 'backpack',
  cost: 520,
  supplier: '台南帆布行',
}
