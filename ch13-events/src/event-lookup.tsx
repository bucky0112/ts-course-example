// p19 怎麼查出該用哪一種：先寫在 JSX 裡，滑鼠移到 e 上看型別，再抄去標註
// tsc 實測（@types/react 19.3.0）：
// - 輸入框 onChange 的 e：ChangeEvent<HTMLInputElement, HTMLInputElement>
// - 按鈕 onClick 的 e：MouseEvent<HTMLButtonElement, MouseEvent>
// - 表單 onSubmit 的 e：SubmitEvent<HTMLFormElement>（不是舊教學常給的 FormEvent）
// 第二個參數有預設值，標註時寫 ChangeEvent<HTMLInputElement> 就夠了。本檔 0 條紅線

export function LookupDemo() {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input onChange={(e) => console.log(e.target.value)} />
      <button onClick={(e) => console.log(e.currentTarget.textContent)}>送出</button>
    </form>
  )
}
