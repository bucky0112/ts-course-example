# 第 2 章：把 TS 編譯成 JS

只有 TypeScript，沒有 Vite，看 `tsc` 單獨做了什麼。

## 執行

```bash
npm install
npm run build    # = tsc，把 src/*.ts 編譯到 dist-tsc/
npm start        # 用 node 執行編譯出來的 dist-tsc/hello.js
```

## 觀察重點

- 對照 `src/hello.ts` 和 `dist-tsc/hello.js`：型別註記全部不見了。
- 編譯結果最後多一行 `export {};`，是 `moduleDetection: "force"` 把檔案當成 module 造成的。
- 在 `hello.ts` 故意寫錯（例如 `const productPrice: number = '1280'`）再跑 `npm run build`：
  `tsc` 會報錯，但預設還是會產生 `.js`。檢查跟丟掉型別是兩件各自獨立的事。

## p11 示範 & Lab：`strict` 開與關

`lab/product.ts` 是一份沒有任何型別標註的商品程式（副檔名已改成 `.ts`），搭配 `lab/tsconfig.json`。

```bash
npm run check:lab    # = tsc -p lab，只檢查不輸出
```

| `lab/tsconfig.json` 的 `strict` | 錯誤數 | 內容 |
|---|---|---|
| `true` | **5** | 4 條 `TS7006` 參數未標註（implicit any）＋ 1 條 `TS2339` |
| `false` | **1** | 只剩 `TS2339`：`product.discount` 這個欄位不存在 |

- 要關掉請**明寫 `"strict": false`**。TypeScript 6 以後 `strict` 預設是 `true`，把那行註解掉等於沒關。
- 關掉少了 4 條，但 `discount` 那 1 條還在：它不是嚴不嚴格的問題，是真的寫錯。關掉檢查跟解決問題是兩件事。
- 示範完記得改回 `true`。
