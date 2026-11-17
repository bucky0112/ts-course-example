# 第 3 章：幫值標上型別

`src/` 每個檔案都有故意寫錯的地方，打開就會看到紅線。

| 簡報 | 檔案 | 看什麼 | 指令 |
|---|---|---|---|
| p15 | `src/variable.ts` | string／number／boolean 的標註；把 `1280` 塞進 `string`，紅線在賦值那一行（TS2322） | `npm run check` |
| p16 | `src/product.ts` | 商品物件與它的行內型別標註（很長，先忍著） | `npm run check` |
| p17 | `src/product.ts` | 同一個形狀再抄一次加 `[]`；`push` 一個少了 `onSale` 的物件，紅線指著那個物件（TS2741） | `npm run check` |
| p18 | `src/format-price.ts` | 參數與回傳都要標；`formatPriceWrong` 的回傳型別寫成 `number`，紅線在 `return` 那一行，不在 `function` 那一行（TS2322） | `npm run check` |
| p19 | `exercise/start.ts` | 練習起點：第 2 章 lab 改名後的商品程式，沒有任何標註（已拿掉 `product.discount` 那行） | `npm run check` |
| p19 | `exercise/solution.ts` | 解答：補齊標註、沒有 `any`，同一個形狀抄到第三次 | `npm run check` |
| p19 | `src/exercise.ts` | 第 3 題「價格改成字串」，以及「試試看：塞一個 `null` 進去」（兩條 TS2322） | `npm run check` |

## 執行

```bash
npm install
npm run check    # = tsc，只檢查不輸出，列出所有錯誤
```

預期會看到 **9 個錯誤**：

- `src/` 的示範檔 5 個：`variable.ts` 1、`product.ts` 1、`format-price.ts` 1、`exercise.ts` 2。
- `exercise/start.ts` 4 個：`formatPrice` 的 `price`、`findByKeyword` 的 `list`、`keyword`、`item`，都是 TS7006（參數隱含 any）。這就是練習要你補的地方，補完後只剩 `src/` 的 5 個。
- `exercise/solution.ts` 0 個。
