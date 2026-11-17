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

// 更新用的形狀從 NewProduct 衍生：id 是拿來「找」要更新哪一筆，不是拿來改的
type ProductUpdate = Partial<NewProduct>

function updateProduct(id: number, changes: ProductUpdate) {
  console.log('更新商品', id, changes)
}

const draft: NewProduct = { name: '帆布零錢包', price: 290, onSale: false, category: 'pouch' }
const patch: ProductUpdate = { price: 1080 }
updateProduct(1, patch)

// ── 試試看 ──
// 1. 取消註解：把 id 傳給 NewProduct 會紅線（TS2353）
// const wrong: NewProduct = { id: 9, name: '帆布零錢包', price: 290, onSale: false, category: 'pouch' }
// 2. 取消註解：更新時想改 id 也會紅線（TS2353）
// const badPatch: ProductUpdate = { id: 2 }
// 3. 在 Product 加 weight: number，draft 會紅線，patch 不會（因為全部可選）
