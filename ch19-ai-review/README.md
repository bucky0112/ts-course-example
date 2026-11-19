# 第 19 章：自己審一遍（AI 產碼型別審查）

| 簡報 | 檔案 | 看什麼 | 指令 |
|---|---|---|---|
| p17 | `src/three-kinds.ts` | AI 產碼常見的三類問題：滿地 `any`、型別謊言、過度斷言。三段都是 0 條紅線 | `npm run check` |
| p18 | `CHECKLIST.md` | 審查清單六項，帶回去自己用 | 打開閱讀 |
| p19 | `src/ai-suggestion.ts` | 一段 AI 給的建議，原樣保留 | 打開閱讀 |
| p21 | `reference-project/` | 練習用的參考專案：商品瀏覽頁（Vite + React + Zod） | `npm run dev`、`npm run check` |

## 參考專案

`reference-project/` 先由 AI 產生，再由講師加工。已經有自己作品的人，直接審自己的程式碼；沒有的，審這個專案。

用 `CHECKLIST.md` 逐項走一遍，把發現分成「該修」與「可接受」兩類，各寫理由。本練習只審不改。

資料來自 `reference-project/public/products.json`（DummyJSON 2026-11-17 的 30 筆快照），不需要連網。

## 執行

```bash
npm install
npm run dev      # 開參考專案
npm run check    # = tsc，檢查 src/ 與 reference-project/src/
```

預期：`npm run check` **0 個錯誤**。紅線全無，不代表沒有問題。
