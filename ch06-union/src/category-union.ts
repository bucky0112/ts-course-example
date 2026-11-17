// p37 把可能性列出來：拼錯立刻紅線（TS2820）
// p38 編輯器提示：把 'backpak' 刪掉，在引號裡按 Ctrl+Space，四個選項會跳出來

type Category = 'backpack' | 'sleeve' | 'accessory' | 'pouch'

interface Product {
  id: number
  name: string
  category: Category
}

const product: Product = {
  id: 1,
  name: '經典帆布後背包',
  category: 'backpak',
}
