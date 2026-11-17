# 第 3 章：幫值標上型別

每個檔案都有一行故意寫錯，打開就會看到紅線。

| 檔案 | 內容 | 故意的錯誤 |
|---|---|---|
| `src/variable.ts` | string / number / boolean | 把 `1280` 放進 `string` |
| `src/product.ts` | 物件型別、陣列型別 | `push` 少了 `onSale` |
| `src/format.ts` | 函式參數與回傳值 | 回傳型別寫成 `number` |
| `src/exercise.ts` | 練習題 | `null` 給 `number`、價格寫成字串 |

## 執行

```bash
npm install
npm run check    # = tsc，只檢查不輸出，列出所有錯誤
```

預期會看到 5 個錯誤。
