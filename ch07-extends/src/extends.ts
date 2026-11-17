// p43 extends：「就是 A，再多幾個」
// 現場動作：在 Product 加一個欄位（例如 weight: number），看兩邊是不是同時紅線

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
  ...product,
  cost: 520,
  supplier: '台南帆布行',
}
