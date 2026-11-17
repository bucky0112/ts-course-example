// 第 2 章 p11 示範／p12 練習的起點：把這個檔案改名成 product.ts
//   mv lab/product.before.js lab/product.ts
//
// 這是一份「很正常」的 JavaScript：能跑、不會當、沒有任何型別標註。
// 改名成 .ts 之後跑 npm run check:lab：
//   strict: true  → 5 條（第 23、28、28、29 行參數沒標 TS7006；第 34 行 TS2339）
//   strict: false → 1 條（只剩第 34 行的 product.discount）

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

// 這一行本來就寫錯了：product 沒有 discount 這個欄位。
// JavaScript 不會抱怨，只會算出 NaN。
const discountedPrice = product.price * product.discount

console.log(formatPrice(discountedPrice))
console.log(findByKeyword(products, '背包'))

export { product, products, formatPrice, findByKeyword }
