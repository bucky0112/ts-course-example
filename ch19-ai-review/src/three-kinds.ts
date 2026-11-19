// p17 AI 產碼常見的三類問題：三段都是 0 條紅線

interface Product {
  id: number
  title: string
  price: number
  brand: string
}

type Stock = number | 'unknown'

// 1. 滿地 any：參數、回傳值都是 any，型別檢查整段關掉
export function applyDiscount(product: any, rate: any): any {
  return { ...product, price: product.price * rate }
}

// 2. 型別謊言：回傳值宣稱是 Product[]，實際上 API 回的是 { products, total, skip, limit }
export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch('https://dummyjson.com/products?limit=30')
  return res.json()
}

// 3. 過度斷言：stock 可能是 'unknown'，as 讓紅線消失，執行時照樣當機
export function formatStock(stock: Stock) {
  return (stock as number).toFixed(0) + ' 件'
}
