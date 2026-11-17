// p18 ChangeEvent 與 MouseEvent：從 react import 進來再標註
// - 標上型別之後打錯 e.target.valu → TS2551
// - MouseEvent 跟瀏覽器內建型別同名，這裡改名成 ReactMouseEvent 避免混淆（忘了 import 的情況見 event-forgot-import.tsx）

import { useState } from 'react'
import type { ChangeEvent, MouseEvent as ReactMouseEvent } from 'react'

export function TypedHandlers() {
  const [query, setQuery] = useState('')

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.valu)
  }

  function handleClick(e: ReactMouseEvent<HTMLButtonElement>) {
    e.currentTarget.disabled = true
  }

  return (
    <div>
      <input value={query} onChange={handleChange} />
      <button onClick={handleClick}>送出</button>
    </div>
  )
}
