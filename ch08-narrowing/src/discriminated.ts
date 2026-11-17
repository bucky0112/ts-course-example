// p53 可辨識聯集：三種狀態，靠一個共同欄位分辨
// 三種形狀都有 status，而且值互不重疊 —— TypeScript 就靠它分辨現在是哪一種
// （這裡用「訂單送出」當例子；商品清單的三種載入狀態留給 p54 練習）

type SubmitState =
  | { status: 'loading' }
  | { status: 'error'; message: string }
  | { status: 'success'; orderId: number }

function submitMessage(state: SubmitState) {
  if (state.status === 'loading') {
    // 這裡只有 status，沒有 message 也沒有 orderId
    return '訂單送出中…'
  }

  if (state.status === 'error') {
    // 這裡才拿得到 message
    return '送出失敗：' + state.message
  }

  // 剩下只可能是 success，這裡才拿得到 orderId
  return '訂單成立，編號 ' + state.orderId
}

// ── 試試看 ──
// 在第一個分支（loading）裡打 state.orderId → TS2339
// 它不讓你在還不知道結果的時候，就去拿結果
