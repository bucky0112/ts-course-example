// p36 category 打成 string，拼錯也沒人管

interface Product {
  id: number
  name: string
  category: string
}

const product: Product = {
  id: 1,
  name: '經典帆布後背包',
  category: 'backpak', // 拼錯了，沒有紅線
}
