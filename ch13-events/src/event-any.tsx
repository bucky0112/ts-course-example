// p17 抽出去就失去線索
// 1. 直接寫在 JSX 裡：TS 從 onChange 推得出 e 的型別，e.target.valu 打錯 → TS2551（Did you mean 'value'?）
// 2. 抽成具名函式、參數不標：TS 沒有線索 → TS7006
// 3. 明寫 e: any：0 條紅線，打錯也沒人管——只有這種才是真的「沒人管」

import { useState } from 'react'

export function InlineHandler() {
  const [query, setQuery] = useState('')
  return <input value={query} onChange={(e) => setQuery(e.target.valu)} />
}

export function ExtractedHandler() {
  const [query, setQuery] = useState('')

  function handleChange(e) {
    setQuery(e.target.value)
  }

  return <input value={query} onChange={handleChange} />
}

export function AnyHandler() {
  const [query, setQuery] = useState('')

  function handleChange(e: any) {
    setQuery(e.target.valu)
  }

  return <input value={query} onChange={handleChange} />
}
