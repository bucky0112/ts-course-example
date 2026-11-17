import { products } from './products.js'
import { salePrice } from './price.js'

const app = document.body
app.innerHTML = products
  .map((p) => `<li>${p.name} NT$ ${salePrice(p)}</li>`)
  .join('')
