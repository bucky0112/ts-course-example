// p16 一包資料、p17 一份清單
// 物件的形狀被原封不動抄了兩次：p16 標在 product 上，p17 標在 products 上。

// p16：一包資料
const product: { name: string; price: number; image: string; onSale: boolean } = {
  name: '經典帆布後背包',
  price: 1280,
  image: '/backpack.jpg',
  onSale: true,
}

// p17：一份清單。同一個形狀，第二次。
const products: { name: string; price: number; image: string; onSale: boolean }[] = [
  product,
  { name: '輕量筆電內袋', price: 890, image: '/sleeve.jpg', onSale: false },
  { name: '皮革證件套', price: 450, image: '/cardholder.jpg', onSale: false },
]

// p17 塞錯東西進去：少了 onSale，紅線直接指著這個物件
products.push({ name: '防水收納袋', price: 320, image: '/pouch.jpg' })

export { product, products }
