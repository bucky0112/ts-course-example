// p13 useRef 與 DOM
// - 滑鼠移到 inputRef：RefObject<HTMLInputElement | null>
// - 直接 inputRef.current.focus() → TS18047（current 在元件掛上去之前是 null）
// - 正確寫法：存取前先檢查 null（focusSafely）
// - React 19 的型別：useRef<T>() 不給參數 → TS2554（下面 BadRef 刻意留著）

import { useRef } from 'react'

export function SearchBox() {
  const inputRef = useRef<HTMLInputElement>(null)

  function focusUnsafely() {
    inputRef.current.focus()
  }

  function focusSafely() {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <div>
      <input ref={inputRef} placeholder="搜尋商品" />
      <button onClick={focusUnsafely}>直接 focus</button>
      <button onClick={focusSafely}>檢查後 focus</button>
    </div>
  )
}

export function BadRef() {
  const ref = useRef<HTMLInputElement>()
  return <input ref={ref} />
}
