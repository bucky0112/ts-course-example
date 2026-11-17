// p39 新的麻煩：可能是兩種，就不能直接用（TS2339）
// 錯誤訊息第一行說 Stock 上沒有 toFixed，第二行點名出事的是 "unknown"

type Stock = number | 'unknown'

function formatStock(stock: Stock) {
  return stock.toFixed(0) + ' 件'
}
