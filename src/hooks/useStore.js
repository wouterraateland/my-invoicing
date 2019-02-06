import { useState } from "react"
import merge from "deepmerge"
import isPlainObject from "is-plain-object"

import { identity, constant } from "utils/functions"

const options = {
  isMergeableObject: isPlainObject
}

const getParts = (key, split) =>
  Array.isArray(key) ? key : split ? key.split(".") : [key]

const useStore = ({
  initialState,
  rootReducer = identity,
  enhancer = identity
}) => {
  const [state, setState] = useState(initialState || {})

  const read = (key, defaultValue = undefined, split = true) =>
    getParts(key, split).reduce(
      (value, part) => (value[part] === undefined ? defaultValue : value[part]),
      state
    )

  return {
    state,
    read,
    setState: newState =>
      setState(state => enhancer(merge(state, newState, options))),
    dispatch: action => setState(state => enhancer(rootReducer(state, action))),
    write: (key, newValue, split = true) => {
      const parts = getParts(key, split)

      return setState(state =>
        enhancer(
          merge(
            state,
            parts.reduceRight(
              (v, part) => ({ [part]: v }),
              typeof newValue === "function" ? newValue(read(parts)) : newValue
            ),
            options
          )
        )
      )
    }
  }
}

export default useStore

export const createPersistentStoreCreator = ({
  serialize,
  deserialize,
  load,
  save
}) => ({ name = "store", persistKey = constant(true), initialState }) => ({
  initialState: deserialize(load(name)) || initialState,
  enhancer: state => {
    save(
      name,
      serialize(
        Object.keys(state)
          .filter(persistKey)
          .reduce((acc, key) => ({ ...acc, [key]: state[key] }), {})
      )
    )
    return state
  }
})
