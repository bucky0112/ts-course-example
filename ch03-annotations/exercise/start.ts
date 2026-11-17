// 第 3 章練習（p19）：幫商品資料補上標註，但不准用 any
// 起點是第 2 章 lab 改名後的 product.ts，拿掉了 product.discount 那行
// 1. 幫商品物件每個欄位補標註
// 2. 幫 formatPrice 補參數與回傳
// 3. 把價格改成字串，確認紅線（可以對照 src/exercise.ts）
// findByKeyword 的參數也有紅線，一起補完，tsc 對這個檔案才會全綠

const product = {
  name: '經典帆布後背包',
  price: 1280,
  image: '/backpack.jpg',
  onSale: true,
}

const products = [
  product,
  { name: '輕量筆電內袋', price: 890, image: '/sleeve.jpg', onSale: false },
  { name: '皮革證件套', price: 450, image: '/cardholder.jpg', onSale: false },
]

// 把價格印成 NT$ 1,280 的樣子
function formatPrice(price) {
  return `NT$ ${price.toLocaleString()}`
}

// 依關鍵字找商品
function findByKeyword(list, keyword) {
  return list.filter((item) => item.name.includes(keyword))
}

console.log(formatPrice(product.price))
console.log(findByKeyword(products, '背包'))

export { product, products, formatPrice, findByKeyword }
