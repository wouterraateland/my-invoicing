export const replace = (xs, i, x) => [
  ...xs.slice(0, i),
  x,
  ...xs.slice(i + 1, xs.length)
]
