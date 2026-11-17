// p51 用 typeof 先確認是哪一種，型別就變窄了（修正前的版本在 src/stock.ts，p50）
// 現場一定要做：滑鼠移到 if 裡面的 stock（number），再移到外面的 stock（'unknown'）

type Stock = number | 'unknown'

function formatStock(stock: Stock) {
  if (typeof stock === 'number') {
    return stock.toFixed(0) + ' 件'
  }
  return '庫存查詢中'
}
