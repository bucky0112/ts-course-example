// p25 any 從哪來：沒有人打過 any，any 還是進來了

// 1. 參數沒標 → TS7006
function formatPrice(price) {
  return 'NT$ ' + price
}

// 2. 跨函式賦值 → TS7034 / TS7005
let lastViewed
function view(name: string) {
  lastViewed = name
}
function showLastViewed() {
  return lastViewed
}

// 3. 不會紅線的 any ← 重點
// JSON.parse 回傳 any：打錯字、呼叫不存在的方法，全部沒有紅線
const saved = JSON.parse('{"name":"經典帆布後背包","price":1280}')
saved.naem.toUpperCase()
saved.whatever()
