// 第 17 章練習（p7）：讀五則錯誤訊息
// 這份檔案有五則刻意留下的型別錯誤。本練習不要求修好，只要求讀懂。
// 1. 跑 npm run check，對每一則寫下：它期望什麼、實際拿到什麼、你認為該改哪一行
// 2. 其中兩則「該改的行」跟「報錯的行」不同，把它們標出來
// 3. 挑一則你覺得最難讀的，寫下卡在哪裡
// 收工時 npm run check 應該還是有這五則（不要把型別改鬆來消掉紅線）

type Category = 'backpack' | 'sleeve' | 'accessory' | 'pouch'

interface Product {
  readonly id: number
  name: string
  price: number
  onSale: boolean
  category: Category
}

const backpack: Product = { id: 1, name: '經典帆布後背包', price: 1280, onSale: true, category: 'backpack' }

// 購物車
const cart = { items: [] }
cart.items.push(backpack)

// 顯示價格
function formatPrice(price: number) {
  return `NT$ ${price.toLocaleString()}`
}
console.log(formatPrice(backpack.name))

// 新上架的商品
const pouch: Product = { id: 4, name: '收納小包', price: 320, category: 'pouch' }

// 從表單匯入的一批商品
function importProducts(list: Product[]) {
  return list.length
}

const fromForm = [
  { id: 5, name: '旅行頸枕', price: 590, onSale: 'yes', category: 'accessory' },
]

importProducts(fromForm)

// 標價
console.log(`NT$ ${backpack.prise}`)
