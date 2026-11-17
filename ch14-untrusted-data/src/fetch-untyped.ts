// p24 fetch 回來的是什麼：滑鼠移到 data 上，型別是 any
// 回收章 4 p25「沒有人打過 any，any 還是進來了」——res.json() 的型別定義就寫死回傳 any
// 下面兩個欄位名都打錯了，npm run check 一條紅線都沒有

import { SOURCE } from './source'

export async function loadUntyped() {
  const res = await fetch(SOURCE)
  const data = await res.json()
  console.log(data.prodcts[0].nmae.toUpperCase())
}
