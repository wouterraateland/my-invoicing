export const currencyFormatter = new Intl.NumberFormat("nl-NL", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 2
});

const Currency = ({ amount }) => currencyFormatter.format(amount);

export default Currency;
