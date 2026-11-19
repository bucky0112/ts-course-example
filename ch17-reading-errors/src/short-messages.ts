// p46 三則短訊息：每則只問兩件事——它要什麼？你給了什麼？

import type { Product } from './product'

// 1. 變數
const price: number = '1280'

// 2. 函式參數
function formatPrice(price: number) {
  return `NT$ ${price.toLocaleString()}`
}
formatPrice('1280')

// 3. 少一個欄位
const sleeve: Product = { id: 2, name: '輕量筆電內袋', price: 890, onSale: false }
