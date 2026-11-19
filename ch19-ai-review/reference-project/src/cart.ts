import type { CartItem } from './types'

const STORAGE_KEY = 'cart'

export function loadCart(): CartItem[] {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]')
}

export function saveCart(items: CartItem[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
}

export function addToCart(items: CartItem[], productId: number): CartItem[] {
  const existing = items.find((item) => item.productId === productId)
  if (existing) {
    return items.map((item) => (item.productId === productId ? { ...item, quantity: item.quantity + 1 } : item))
  }
  return [...items, { productId, quantity: 1 }]
}
