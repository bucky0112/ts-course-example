// p66 新增商品時還沒有 id：id 是資料庫給的，送出去的時候根本還沒有

type Category = 'backpack' | 'sleeve' | 'accessory' | 'pouch'

interface Product {
  readonly id: number
  name: string
  price: number
  onSale: boolean
  category: Category
}

// 丟掉 id：要丟的比較少 → Omit
type NewProduct = Omit<Product, 'id'>

// 只挑 id 和 name：要挑的比較少 → Pick
type ProductOption = Pick<Product, 'id' | 'name'>

const draft: NewProduct = { name: '帆布零錢包', price: 290, onSale: false, category: 'pouch' }
const option: ProductOption = { id: 1, name: '經典帆布後背包' }
