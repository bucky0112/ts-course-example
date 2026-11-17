// p67 Record：一張表，鍵是左邊那個，值是右邊那個

type Category = 'backpack' | 'sleeve' | 'accessory' | 'pouch'

interface Product {
  readonly id: number
  name: string
  price: number
  onSale: boolean
  category: Category
}

// 鍵直接從 Product 取出 category 那個 union，改 Product 這張表跟著變
// 每個鍵一個都不能少：下面少了 pouch → 紅線
const productsByCategory: Record<Product['category'], Product[]> = {
  backpack: [],
  sleeve: [],
  accessory: [],
}

// 只放幾個：用 Partial<Record<>>
const featuredByCategory: Partial<Record<Product['category'], Product>> = {
  backpack: { id: 1, name: '經典帆布後背包', price: 1280, onSale: true, category: 'backpack' },
}
