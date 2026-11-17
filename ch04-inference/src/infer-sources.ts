// p23 推論從哪來：有初始值就推得出來

// 1. 有初始值的變數
let productName = '經典帆布後背包' // string

// 2. 函式的回傳值（從 return 推）
function formatPrice(price: number) {
  return 'NT$ ' + price // 滑鼠移到 formatPrice：回傳 string
}

// 3. 陣列裡已經有東西
const prices = [1280, 680, 350] // number[]
