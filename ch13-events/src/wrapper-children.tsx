// p20 children 與 ReactNode：用 Section 示範包裝型元件（Header 留給練習第 3 題）
// - UntypedSection：props 完全沒標 → title、children 各一條 TS7031（跟章 11 p4 一樣）
// - TypedSection 標成 ReactNode 之後：沒傳 children → TS2741
// - 把一個普通物件當 children 傳進去 → 物件不是 ReactNode，TS2353（訊息很長，列出 ReactNode 可以是哪些東西）

import type { ReactNode } from 'react'

function UntypedSection({ title, children }) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  )
}

type SectionProps = {
  title: string
  children: ReactNode
}

function TypedSection({ title, children }: SectionProps) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  )
}

export function Page() {
  return (
    <div>
      <UntypedSection title="本週推薦">
        <p>經典帆布後背包</p>
      </UntypedSection>
      <TypedSection title="本週推薦">
        <p>經典帆布後背包</p>
      </TypedSection>
      <TypedSection title="空的" />
      <TypedSection title="錯的">{{ name: '經典帆布後背包' }}</TypedSection>
    </div>
  )
}
