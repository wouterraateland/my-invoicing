export const currencyFormatter = new Intl.NumberFormat("nl-NL", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 2
})

const Currency = ({ amount }) => {
  return currencyFormatter.format(amount)
}

export default Currency
