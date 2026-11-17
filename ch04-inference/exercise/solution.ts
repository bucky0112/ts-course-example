// 第 4 章解答：留下的三個標註，剛好各屬於一種「推不出來」的場合

const shopName = '帆布小舖'

const products = [
  { id: 1, name: '經典帆布後背包', price: 1280, category: 'backpack' },
  { id: 2, name: '筆電內袋', price: 680, category: 'sleeve' },
  { id: 3, name: '皮革鑰匙圈', price: 350, category: 'accessory' },
]

const total = products.reduce((sum, product) => sum + product.price, 0)

// 留下來（空陣列）：沒有初始值，要等 push 才知道裡面放什麼
const wishlist: { id: number; name: string; price: number; category: string }[] = []

// 留下來（跨函式賦值）：拿掉會出現 TS7034 / TS7005
let featured: { id: number; name: string; price: number; category: string }

function pickFeatured() {
  featured = products[0]
}

function featuredLabel() {
  return '本週推薦：' + featured.name
}

// 留下來（函式參數）：參數沒有初始值，拿掉會出現 TS7006
function findByKeyword(
  list: { id: number; name: string; price: number; category: string }[],
  keyword: string,
) {
  return list.filter((product) => product.name.includes(keyword))
}

// 同一個形狀抄了三次 → 第 5 章幫它取個名字
