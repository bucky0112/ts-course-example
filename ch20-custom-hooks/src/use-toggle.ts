// 1. 最小的 custom hook：名字用 use 開頭、裡面可以呼叫其他 hook，就這樣
// 回傳 [值, 改值的函式]，跟 useState 一樣的形狀

import { useState } from 'react'

export function useToggle(initial = false) {
  const [on, setOn] = useState(initial)
  const toggle = () => setOn((prev) => !prev)

  // as const：讓 TS 把它當成「第 1 格 boolean、第 2 格函式」的 tuple
  // 拿掉 as const 會發生什麼事，見 toggle-without-as-const.tsx
  return [on, toggle] as const
}
