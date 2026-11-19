// p47 長訊息怎麼讀：從第一行往下讀，看到 property 'X' 就停

import type { Product } from './product'

// 三層：第 7 章看過的 TS2430（覆寫 id 的型別）
interface AdminProduct extends Product {
  readonly id: string
}

// 四層：陣列裡某一筆的 category 打錯
function totalPrice(list: Product[]) {
  return list.reduce((sum, product) => sum + product.price, 0)
}

const fromSheet = [
  { id: 1, name: '經典帆布後背包', price: 1280, onSale: true, category: 'backpack' },
  { id: 2, name: '輕量筆電內袋', price: 890, onSale: false, category: 'sleve' },
]

totalPrice(fromSheet)
