// 第 7 章解答

type Category = 'backpack' | 'sleeve' | 'accessory' | 'pouch'
type Stock = number | 'unknown'

interface Product {
  readonly id: number
  name: string
  price: number
  discountPrice?: number
  category: Category
  stock: Stock
}

interface AdminProduct extends Product {
  cost: number
  supplier: string
}

const product: Product = {
  id: 1,
  name: '經典帆布後背包',
  price: 1280,
  category: 'backpack',
  stock: 12,
}

const adminProduct: AdminProduct = {
  id: 1,
  name: '經典帆布後背包',
  price: 1280,
  category: 'backpack',
  stock: 12,
  cost: 520,
  supplier: '台南帆布行',
}

// ── 試試看 ──
// 在 Product 加 weight: number → product 和 adminProduct 同時紅線（TS2741）
//
// 取消註解：
// 覆寫成 number 不會報錯，因為 id 本來就是 number
// interface AdminProductA extends Product { readonly id: number }
// 覆寫成 string 會被擋下來（TS2430）
// interface AdminProductB extends Product { readonly id: string }
