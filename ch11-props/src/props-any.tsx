// p4 props 現在是 any：起點檔改成 .tsx 之後，props 還沒有型別
//
// npm run check 會看到：
// - 元件那一行 4 條 TS7031（name、price、image、onSale 各一條）——這就是章 4 p25 講的「會紅線的 any」
// - 下面沒傳 onSale 的兩張卡各 1 條 TS2741——假警訊：解構時 TS 把每個欄位都當必填，標上型別就會消失
// - price="1450" 不會紅：參數是 any，字串也收。這才是這頁要看見的問題

function UntypedCard({ name, price, image, onSale }) {
  return (
    <div className="card">
      <img className="card-image" src={image} alt={name} />
      <h3 className="card-name">{name}</h3>
      <p className="card-price">NT$ {price.toLocaleString()}</p>
      {onSale && <span className="card-badge">特價</span>}
    </div>
  )
}

export function UntypedList() {
  return (
    <div className="product-list">
      <UntypedCard name="經典帆布後背包" price={1280} image="/backpack.jpg" onSale />
      <UntypedCard name="輕量筆電內袋" price={890} image="/sleeve.jpg" />
      <UntypedCard name="皮革證件套" price="1450" image="/cardholder.jpg" />
    </div>
  )
}
