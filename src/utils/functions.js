export const noop = () => {}
export const identity = x => x
export const constant = x => () => x

export const log = (f, name) => (...args) => {
  const output = f(args)
  console.log(`${name}: ${args} -> ${output}`)
  return output
}

export const replace = (xs, i, x) => [
  ...xs.slice(0, i),
  x,
  ...xs.slice(i + 1, xs.length)
]
