export const noop = () => {}
export const identity = x => x
export const constant = x => () => x

export const log = v => {
  console.log(v)
  return v
}

export const replace = (xs, i, x) => [
  ...xs.slice(0, i),
  x,
  ...xs.slice(i + 1, xs.length)
]
