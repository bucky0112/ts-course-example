// p60 限制範圍：不是什麼都能傳進來

function findById<T extends { id: number }>(list: T[], id: number): T | undefined {
  return list.find((item) => item.id === id)
}

// 用變數傳：TS2345，訊息直接講到重點「缺少 id」
const coupons = [{ code: 'NEW100' }]
findById(coupons, 1)

// 寫成字面量：變成 TS2353，訊息在講「多了 code」
findById([{ code: 'NEW100' }], 1)
