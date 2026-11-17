// p65 Partial：一行解決
// 試試看：在 Product 加 weight: number，再到下面 patch 裡打 weight，自動完成會有它

type Category = 'backpack' | 'sleeve' | 'accessory' | 'pouch'

interface Product {
  readonly id: number
  name: string
  price: number
  onSale: boolean
  category: Category
}

type ProductUpdate = Partial<Product>

function updateProduct(id: number, patch: ProductUpdate) {
  console.log('更新商品', id, patch)
}

updateProduct(1, { price: 1080, onSale: true })
