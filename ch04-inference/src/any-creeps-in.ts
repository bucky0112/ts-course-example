// p24、p25 any 從哪來：沒有人打過 any，any 還是進來了

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
// 滑鼠移到 parsed：const parsed: any
// nmae 拼錯、後面亂接，一條紅線都沒有（實際執行會當場炸掉）
const raw = '{"name":"經典帆布後背包","price":1280}'
const parsed = JSON.parse(raw)
console.log(parsed.nmae.whatever.deeply.wrong)
