// p4 常見錯誤：把含 JSX 的檔案存成 .ts（不是 .tsx）
// .ts 檔不認得 JSX，<div> 會被當成語法錯誤（TS1005、TS1161）。
// 語法錯誤會讓 tsc 停在解析階段、蓋掉其他所有錯誤，所以這個檔案不在主 tsconfig 裡，
// 用 npm run check:ts-ext 單獨看。

export function Hello() {
  return <div className="card">Hello</div>
}
