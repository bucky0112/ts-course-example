// 第 5 章解答

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

const wishlist: Product[] = []

let featured: Product

function pickFeatured() {
  featured = products[0]
}

function findByKeyword(list: Product[], keyword: string) {
  return list.filter((product) => product.name.includes(keyword))
}

// ── 試試看：一次取消一行的註解 ──
// products[0].id = 99                                      // TS2540：id 是唯讀
// const saved = products[0].price - products[0].discountPrice // TS2532：可能是 undefined，第 8 章解
