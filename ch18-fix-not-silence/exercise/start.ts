// 第 18 章練習（p14）：把掩蓋改回修正
// 這段程式碼 npm run check 一個錯誤都沒有，但裡面用了三種掩蓋手法。
// 1. 找出三處掩蓋，標記各是哪一種手法
// 2. 每一處改成真正的修正。過程中紅線會回來——那代表檢查回來了，不是你改壞了
// 3. 改完 npm run check 回到 0 個錯誤，而且檔案裡沒有 any、@ts-ignore、非空斷言 !
// 4. 如果你保留了任何一處 as，寫下你比編譯器多知道的是哪一件事
// zod 已經裝好了，可以直接 import { z } from 'zod'

type Category = 'backpack' | 'sleeve' | 'accessory' | 'pouch'
type Stock = number | 'unknown'

interface Product {
  readonly id: number
  name: string
  price: number
  onSale: boolean
  category: Category
  stock: Stock
}

// 假裝這是 API 回傳的文字
const responseText =
  '[{"id":1,"name":"經典帆布後背包","price":1280,"onSale":true,"category":"backpack","stock":12},' +
  '{"id":2,"name":"輕量筆電內袋","price":890,"onSale":false,"category":"sleeve","stock":"unknown"},' +
  '{"id":3,"name":"皮革證件套","onSale":false,"category":"accessory","stock":5}]'

const data: any = JSON.parse(responseText)
const products: Product[] = data

function formatStock(stock: Stock) {
  return (stock as number).toFixed(0) + ' 件'
}

function readKeyword(input: HTMLInputElement | null) {
  // @ts-ignore
  return input.value.trim()
}

export function renderList(input: HTMLInputElement | null) {
  const keyword = readKeyword(input)
  return products
    .filter((product) => product.name.includes(keyword))
    .map((product) => `${product.name}：NT$ ${product.price.toLocaleString()}（庫存 ${formatStock(product.stock)}）`)
}
