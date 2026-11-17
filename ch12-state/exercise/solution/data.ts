import type { Product } from './types'

// 本機商品資料：章 14 才改成從 API 取得
export const sampleProducts: Product[] = [
  { id: 1, name: '經典帆布後背包', price: 1280, image: '/backpack.jpg', onSale: true, category: 'backpack' },
  { id: 2, name: '輕量筆電內袋', price: 890, image: '/sleeve.jpg', onSale: false, category: 'sleeve' },
  { id: 3, name: '皮革證件套', price: 1450, image: '/cardholder.jpg', onSale: false, category: 'accessory' },
]
