// p5 標上 props 型別：用 Pick 從 Product 裁出四個欄位
// 下面三種用錯的方式都會紅線，而且紅在「使用的地方」——回收章 3 p18：紅線指的是證據

import type { Product } from './types'

type CardProps = Pick<Product, 'name' | 'price' | 'image' | 'onSale'>

function TypedCard({ name, price, image, onSale }: CardProps) {
  return (
    <div className="card">
      <img className="card-image" src={image} alt={name} />
      <h3 className="card-name">{name}</h3>
      <p className="card-price">NT$ {price.toLocaleString()}</p>
      {onSale && <span className="card-badge">特價</span>}
    </div>
  )
}

export function TypedMistakes() {
  return (
    <div className="product-list">
      {/* 價格傳成字串 → TS2322，紅在 price 屬性上 */}
      <TypedCard name="皮革證件套" price="1450" image="/cardholder.jpg" onSale={false} />
      {/* 少傳 image → TS2741，紅在元件標籤上 */}
      <TypedCard name="輕量筆電內袋" price={890} onSale={false} />
      {/* 名字打錯 → TS2322（'imgae' 不在 CardProps 裡） */}
      <TypedCard name="經典帆布後背包" price={1280} imgae="/backpack.jpg" onSale />
    </div>
  )
}
