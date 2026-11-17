// 第 8 章解答

interface Product {
  readonly id: number
  name: string
  price: number
}

type ProductListState =
  | { status: 'loading' }
  | { status: 'error'; message: string }
  | { status: 'success'; products: Product[] }

function describeState(state: ProductListState): string {
  switch (state.status) {
    case 'loading':
      return '商品載入中…'
    case 'error':
      return '載入失敗：' + state.message
    case 'success':
      return '共 ' + state.products.length + ' 件商品'
  }
}

// ── 試試看 ──
// 1. 在 loading 分支裡打 state.products → TS2339
// 2. 刪掉 success 分支 → TS2366，紅線在函式簽章那一行
// 3. 再把回傳標註 `: string` 也刪掉 → 一點紅線都沒有
