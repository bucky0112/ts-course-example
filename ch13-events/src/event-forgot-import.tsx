// p18 常見錯誤：忘了 import type { ChangeEvent, MouseEvent } from 'react'
// - MouseEvent 撞到瀏覽器內建（DOM）的同名型別，那個不吃泛型 → TS2315「Type 'MouseEvent' is not generic.」
// - ChangeEvent 在全域找不到 → TS2304「Cannot find name 'ChangeEvent'.」

export function Forgotten() {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value)
  }

  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    console.log(e.currentTarget)
  }

  return (
    <div>
      <input onChange={handleChange} />
      <button onClick={handleClick}>送出</button>
    </div>
  )
}
