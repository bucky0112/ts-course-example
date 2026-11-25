// 1. 回傳陣列卻沒加 as const：紅線（TS2349）
// 滑鼠移到 useToggleNoConst 看回傳型別：(boolean | (() => void))[]
// TS 只知道「這是一個陣列，每一格可能是 boolean 也可能是函式」，不知道哪一格是哪一個

import { useState } from 'react'

function useToggleNoConst(initial = false) {
  const [on, setOn] = useState(initial)
  const toggle = () => setOn((prev) => !prev)
  return [on, toggle]
}

export function DiscountSwitch() {
  const [on, toggle] = useToggleNoConst()

  // toggle 可能是 boolean，boolean 不能呼叫 → TS2349
  return <button onClick={() => toggle()}>{on ? '只看折扣' : '全部商品'}</button>
}
