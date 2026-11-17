// 第 3 章練習解答（p19）：整份檔案沒有 any
// 同一個形狀總共抄了三次：product、products、findByKeyword 的參數與回傳
// 這樣抄下去可以嗎？第 5 章會給這個形狀一個名字

const product: { name: string; price: number; image: string; onSale: boolean } = {
  name: '經典帆布後背包',
  price: 1280,
  image: '/backpack.jpg',
  onSale: true,
}

const products: { name: string; price: number; image: string; onSale: boolean }[] = [
  product,
  { name: '輕量筆電內袋', price: 890, image: '/sleeve.jpg', onSale: false },
  { name: '皮革證件套', price: 450, image: '/cardholder.jpg', onSale: false },
]

function formatPrice(price: number): string {
  return `NT$ ${price.toLocaleString()}`
}

// 第三次。參數一次、回傳一次。
function findByKeyword(
  list: { name: string; price: number; image: string; onSale: boolean }[],
  keyword: string,
): { name: string; price: number; image: string; onSale: boolean }[] {
  return list.filter((item) => item.name.includes(keyword))
}

// 第 2 章那條 product.discount：補標註救不了它，product 的形狀裡就是沒有 discount，所以拿掉

console.log(formatPrice(product.price))
console.log(findByKeyword(products, '背包'))

export { product, products, formatPrice, findByKeyword }
