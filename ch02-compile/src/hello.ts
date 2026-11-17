const productName: string = '經典帆布後背包'
const productPrice: number = 1280

function describe(name: string, price: number): string {
  return `${name} 要價 NT$ ${price}`
}

console.log(describe(productName, productPrice))

const users = [
  { id: 1, name: 'Mike' },
  { id: 2, name: 'John' }
]

const user = users.find(u => u.id === 3)

console.log(user.name)