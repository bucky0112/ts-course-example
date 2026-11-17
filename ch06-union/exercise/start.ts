// 第 6 章練習：把 category 收緊，再撞一次 union 的牆
// 1. category 改成四選一的 union
// 2. 故意打錯，確認紅線
// 3. 加 stock: number | 'unknown'，寫一個用到 stock.toFixed 的函式
//    抄下錯誤訊息就好，不要求修好

interface Product {
  readonly id: number
  name: string
  price: number
  discountPrice?: number
  category: string
}

const products: Product[] = [
  { id: 1, name: '經典帆布後背包', price: 1280, discountPrice: 1080, category: 'backpack' },
  { id: 2, name: '筆電內袋', price: 680, category: 'sleeve' },
  { id: 3, name: '皮革鑰匙圈', price: 350, category: 'accessory' },
]
