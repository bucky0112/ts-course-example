const products = [
  { name: '經典帆布後背包', price: 1280, memberDiscount: { rate: 0.1 } },
  { name: '筆電內袋', price: 680 },
]

const labels = products.map((item) => {
  const salePrice = item.price * (1 - item.memberDiscount.rate)
  return item.name + '：' + salePrice + ' 元'
})

document.body.textContent = labels.join('、')
