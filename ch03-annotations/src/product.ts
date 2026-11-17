const product: { id: number; name: string; price: number; image: string; onSale: boolean } = {
  id: 1,
  name: '經典帆布後背包',
  price: 1280,
  image: '/backpack.jpg',
  onSale: true,
}

const products: { id: number; name: string; price: number; image: string; onSale: boolean }[] = [product]

products.push({
  id: 2,
  name: '筆電內袋',
  price: 680,
  image: '/sleeve.jpg',
})
