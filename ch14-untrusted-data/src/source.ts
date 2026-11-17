// 資料從哪裡來：只改這一行就能切換（斷網備案也是改這裡）
//   'https://dummyjson.com/products?limit=30' 真的 API（要連網）
//   '/products.json'                         DummyJSON 回應的快照（public/，2026-11-17 抓的 30 筆）
//   '/products.broken.json'                  同一份快照，第 2 筆刻意刪掉 price（p26 翻車用）
export const SOURCE = '/products.json'
