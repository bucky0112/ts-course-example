// p52 物件形狀的 union：用「有沒有這個欄位」分辨

interface PhysicalItem {
  name: string
  weight: number
}

interface DigitalItem {
  name: string
  downloadUrl: string
}

function shippingNote(item: PhysicalItem | DigitalItem) {
  if ('weight' in item) {
    return item.name + '：' + item.weight + ' 公克，宅配寄送'
  }
  return item.name + '：下載連結 ' + item.downloadUrl
}
