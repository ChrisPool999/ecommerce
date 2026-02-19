export function formatCurrency(value: number | string): string {
  const numbericValue = typeof value === "string" ? parseFloat(value) : value

  return new Intl.NumberFormat('en-US', {
    style: "currency",
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(numbericValue || 0)
}