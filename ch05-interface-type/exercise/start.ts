// 第 5 章練習：抽出 Product，並處理「有些商品沒有折扣價」
// 1. 三處行內型別改用 Product
// 2. 折扣價（discountPrice）可選、id 唯讀
// 3. 加一個欄位，確認三處同時生效

const products = [
  { id: 1, name: '經典帆布後背包', price: 1280, discountPrice: 1080, category: 'backpack' },
  { id: 2, name: '筆電內袋', price: 680, category: 'sleeve' },
  { id: 3, name: '皮革鑰匙圈', price: 350, category: 'accessory' },
]

const wishlist: { id: number; name: string; price: number; category: string }[] = []

let featured: { id: number; name: string; price: number; category: string }

function pickFeatured() {
  featured = products[0]
}

function findByKeyword(
  list: { id: number; name: string; price: number; category: string }[],
  keyword: string,
) {
  return list.filter((product) => product.name.includes(keyword))
}
