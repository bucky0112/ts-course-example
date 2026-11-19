// p55 把掩蓋改回修正：as 改成 typeof 窄化（第 8 章）

type Stock = number | 'unknown'

// 修正前：as 讓紅線消失，但 stock 是 'unknown' 時照樣當機
function formatStockWithAs(stock: Stock) {
  return (stock as number).toFixed(0) + ' 件'
}

// 修正後：先確認是哪一種，再動手
function formatStock(stock: Stock) {
  if (typeof stock === 'number') {
    return stock.toFixed(0) + ' 件'
  }
  return '庫存查詢中'
}
