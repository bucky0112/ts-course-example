// p49 上一堂留下的紅線，原封不動搬回來（TS2339）
// p50 用 typeof 先確認是哪一種，型別就變窄了
// 現場一定要做：滑鼠移到 if 裡面的 stock（number），再移到外面的 stock（'unknown'）

type Stock = number | 'unknown'

function formatStockBefore(stock: Stock) {
  return stock.toFixed(0) + ' 件'
}

function formatStock(stock: Stock) {
  if (typeof stock === 'number') {
    return stock.toFixed(0) + ' 件'
  }
  return '庫存' + stock
}
