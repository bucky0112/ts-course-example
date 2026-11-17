// 第 10 章解答

type Category = 'backpack' | 'sleeve' | 'accessory' | 'pouch'

interface Product {
  readonly id: number
  name: string
  price: number
  onSale: boolean
  category: Category
}

type NewProduct = Omit<Product, 'id'>
type ProductUpdate = Partial<Product>

const draft: NewProduct = { name: '帆布零錢包', price: 290, onSale: false, category: 'pouch' }
const patch: ProductUpdate = { price: 1080 }

// ── 試試看 ──
// 1. 取消註解：把 id 傳給 NewProduct 會紅線（TS2353）
// const wrong: NewProduct = { id: 9, name: '帆布零錢包', price: 290, onSale: false, category: 'pouch' }
// 2. 在 Product 加 weight: number，draft 會紅線，patch 不會（因為全部可選）
// 3. 想一下：update 型別裡該有 id 嗎？它是拿來找資料的，還是拿來改的？
//    如果不該改 id，可以寫成 Partial<Omit<Product, 'id'>>
