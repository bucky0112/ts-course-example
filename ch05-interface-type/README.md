# 第 5 章：幫一包資料取個名字（interface / type）

| 簡報 | 檔案 | 看什麼 | 指令 |
|---|---|---|---|
| p29 | `exercise/start.ts` | 同一個形狀抄了三次：`wishlist`、`featured`、`findByKeyword` 的 `list` 三處重複的行內型別 | 打開對照 |
| p30 | `src/interface.ts` | 用 interface 取名字；在 interface 加一個欄位（例如 `weight: number`），三個物件字面量出現 3 條 TS2741，`list: Product[]` 不會紅 | 改完 `npm run check` |
| p31 | `src/type-alias.ts` | 同一件事用 type 寫，差別只有第一行 | 打開對照 |
| p33 | `exercise/start.ts` | 練習起點：三處行內型別（接續第 4 章的練習，第 1 筆多了 `discountPrice`） | — |

## 執行

```bash
npm install
npm run check
```

預期 0 個錯誤。上表的紅線都要照「指令」欄動手改了才會出現。
