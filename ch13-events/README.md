# 第 13 章：這個事件是哪一種（事件型別 / ReactNode）

| 簡報 | 檔案 | 看什麼 | 指令 |
|---|---|---|---|
| p17 | `src/event-any.tsx` | 寫在 JSX 裡 TS 推得出 `e` 的型別（`valu` 打錯 → TS2551）；抽成函式不標 → TS7006；明寫 `e: any` 才真的 0 條紅線 | `npm run check` |
| p18 | `src/event-types.tsx` | 從 `react` import `ChangeEvent`、`MouseEvent` 再標註；標好之後打錯 → TS2551 | `npm run check` |
| p18 誤區 | `src/event-forgot-import.tsx` | 忘了 import：`MouseEvent` 撞到瀏覽器內建型別 → TS2315；`ChangeEvent` 找不到 → TS2304 | `npm run check` |
| p19 | `src/event-lookup.tsx` | 先寫在 JSX 裡，滑鼠移到 `e` 查型別：`ChangeEvent<HTMLInputElement, HTMLInputElement>`、`MouseEvent<HTMLButtonElement, MouseEvent>`、`SubmitEvent<HTMLFormElement>`；0 條紅線 | 編輯器懸停 |
| p20 | `src/wrapper-children.tsx` | 用 `Section` 示範：props 不標 → 2 × TS7031；標成 `ReactNode` 後沒傳 children → TS2741；物件當 children → TS2353 | `npm run check` |
| p21 | `exercise/start/`（＝章 12 練習完成的樣子） | 練習起點：把處理器抽成具名函式 → TS7006 → 用 p19 的查法補型別；`Header` 用 `ReactNode` 標註 children | `npm run check` |

## 執行

```bash
npm install
npm run dev      # 看畫面；Vite 開發模式不做型別檢查
npm run check    # = tsc，只檢查不輸出
```

預期：`npm run check` **9 個錯誤**，全部是 `src/` 刻意留下的示範——`event-any.tsx` 2 個（TS2551、TS7006）、`event-types.tsx` 1 個（TS2551）、`event-forgot-import.tsx` 2 個（TS2304、TS2315）、`wrapper-children.tsx` 4 個（2 × TS7031、TS2741、TS2353）。`exercise/` 底下 0 個。

練習是一章接一章的：`exercise/start/` 是章 12 練習完成的樣子，「載入商品」按鈕的 `onClick` 改成用到 `e`（載入後停用自己），讓第 2 題有事件型別可以查。
