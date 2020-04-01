export const noop = () => {};
export const identity = x => x;
export const constant = x => () => x;

export const compose = (...fns) =>
  fns.reduce((f, g) => (...args) => f(g(...args)));
export const pipe = (...fns) => compose.apply(compose, fns.reverse());

export const log = v => {
  console.log(v);
  return v;
};
