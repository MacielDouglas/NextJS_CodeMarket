import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(
  price: number | string,
  options: {
    currency?: "USD" | "EUR" | "GBP" | "BDT" | 'BRL',
    notation?: 'compact' | 'standard' | 'scientific' | 'engineering'
  } = {}
) {
  const { currency = 'USD', notation = 'compact' } = options;
  const numericPrice = typeof price === 'string' ? parseFloat(price) : price;

  const currencyCode = currency === 'BRL' ? 'pt-BR' : 'en-US';

  return new Intl.NumberFormat(currencyCode, {
    style: 'currency',
    currency,
    notation: notation === 'compact' ? 'standard' : notation,
    maximumFractionDigits: 2,
  }).format(numericPrice);
}

