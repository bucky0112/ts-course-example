// 第 8 章練習：處理商品清單的三種載入狀態
// 1. 用共同欄位 status 定義三種狀態：
//    loading、error（帶 message）、success（帶 products）
// 2. 寫函式，對三種狀態各回一句話
// 3. 拿掉一個分支，tsc 抓得到嗎？

interface Product {
  readonly id: number
  name: string
  price: number
}

// 補上 error 和 success 兩種
type ProductListState = { status: 'loading' }

function describeState(state: ProductListState): string {
  switch (state.status) {
    case 'loading':
      return '商品載入中…'
    // 補上另外兩種
  }
}
