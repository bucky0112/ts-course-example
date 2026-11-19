export const SORT_KEYS = ['price', 'rating'] as const

export function sortProducts(list: any[], key: string): any[] {
  return [...list].sort((a, b) => b[key] - a[key])
}

export function formatPrice(price: number) {
  return `$${price.toFixed(2)}`
}
