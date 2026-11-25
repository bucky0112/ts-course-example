# 第 20 章：把邏輯抽成 custom hook（useMemo / useCallback 型別）

簡報還沒做，先用講課順序代替頁碼。

| 順序 | 檔案 | 看什麼 | 指令 |
|---|---|---|---|
| 1 | `src/use-toggle.ts` | 最小的 custom hook：`use` 開頭、裡面呼叫 `useState`、回傳 `[on, toggle] as const` | 編輯器懸停 |
| 1 | `src/toggle-without-as-const.tsx` | 拿掉 `as const`：回傳型別變成 `(boolean \| (() => void))[]`，呼叫 `toggle()` → TS2349 `This expression is not callable.` | `npm run check` |
| 2 | `src/use-products.ts` | 章 16 `App.tsx` 的 fetch + `safeParse` + `LoadState` 原封不動搬進 `useProducts(): LoadState` | 打開對照章 16 |
| 3 | `src/App.tsx` | 呼叫端只剩 `useProducts()`、`useToggle()`；`state.status` 的窄化在 hook 外面一樣有效 | `npm run dev` |
| 4 | `src/memo-types.tsx` | `useMemo` 從回傳值推型別；`useCallback((id) => …)` → TS7006，參數要自己標；開了 React Compiler 的寫法（拿掉兩個 hook，型別標註照寫） | `npm run check` |
| 練習 | `exercise/start/`（＝章 16 的畫面，加上搜尋框） | 練習起點：把抓資料抽成 `useProducts`，有餘力再把搜尋抽成 `useSearch`，完成後 0 個錯誤 | `npm run check` |

本專案**沒有**啟用 React Compiler：`memo-types.tsx` 只講型別，不示範 compiler 的設定。

## 執行

```bash
npm install
npm run dev      # 看畫面；按「只看折扣 15% 以上」切換 useToggle
npm run check    # = tsc，只檢查不輸出
```

預期：`npm run check` **2 個錯誤**，都是刻意留下的：

- `src/toggle-without-as-const.tsx`：TS2349
- `src/memo-types.tsx`：TS7006

`exercise/` 底下 0 個。資料來源切換同章 14：改 `src/source.ts` 的一行。本章練習獨立，不接其他章的練習。
