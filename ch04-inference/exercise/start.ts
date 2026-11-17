// 第 4 章練習：刪掉多餘的標註，只留非標不可的
// 接續第 3 章的商品資料，形狀有調整：新增 id、category，練習裡先拿掉 image、onSale 讓題目單純，
// 以及店名 shopName、總價 total、願望清單 wishlist、本週推薦 featured
// 1. 每刪一個，就把滑鼠移上去確認型別
// 2. 刪了變 any 的，加回去
// 3. 寫下你留了哪幾個、為什麼

const shopName: string = '帆布小舖'

const products: { id: number; name: string; price: number; category: string }[] = [
  { id: 1, name: '經典帆布後背包', price: 1280, category: 'backpack' },
  { id: 2, name: '筆電內袋', price: 680, category: 'sleeve' },
  { id: 3, name: '皮革鑰匙圈', price: 350, category: 'accessory' },
]

const total: number = products.reduce(
  (sum: number, product: { id: number; name: string; price: number; category: string }) =>
    sum + product.price,
  0,
)

const wishlist: { id: number; name: string; price: number; category: string }[] = []

let featured: { id: number; name: string; price: number; category: string }

function pickFeatured(): void {
  featured = products[0]
}

function featuredLabel(): string {
  return '本週推薦：' + featured.name
}

function findByKeyword(
  list: { id: number; name: string; price: number; category: string }[],
  keyword: string,
): { id: number; name: string; price: number; category: string }[] {
  const result: { id: number; name: string; price: number; category: string }[] = list.filter(
    (product: { id: number; name: string; price: number; category: string }) =>
      product.name.includes(keyword),
  )
  return result
}
