// p10 useState 自己推得出來：有初始值，狀態就是那個型別——跟章 4 的型別推論是同一件事
// 滑鼠移到 count：number；移到 query：string。0 條紅線，不用標

import { useState } from 'react'

export function Counter() {
  const [count, setCount] = useState(0)
  const [query, setQuery] = useState('')

  return (
    <div>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>點了 {count} 次</button>
    </div>
  )
}
