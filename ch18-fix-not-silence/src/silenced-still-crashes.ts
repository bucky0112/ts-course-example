// p11 消失不等於解決：三種掩蓋版本都餵同一份壞資料
// 執行：node src/silenced-still-crashes.ts

import { responseText, type Product } from './product.ts'

function renderPrices(list: Product[]) {
  return list.map((product) => `${product.name}：NT$ ${product.price.toLocaleString()}`)
}

const data: unknown = JSON.parse(responseText)
const viaAny: any = data

const versions: [string, () => string[]][] = [
  ['any', () => renderPrices(viaAny)],
  ['as', () => renderPrices(data as Product[])],
  [
    '@ts-ignore',
    () => {
      // @ts-ignore
      return renderPrices(data)
    },
  ],
]

for (const [label, run] of versions) {
  try {
    console.log(`${label}：`, run())
  } catch (error) {
    console.log(`${label}：當機 → ${error instanceof Error ? error.message : String(error)}`)
  }
}
