import { useCallback, useMemo, useState } from "react";
import merge from "deepmerge";
import isPlainObject from "is-plain-object";

import { identity, constant } from "utils/functions";

const options = {
  isMergeableObject: isPlainObject
};

const splitKey = (key, split) =>
  Array.isArray(key) ? key : split ? key.split(".") : [key];

const get = obj => (key, defaultValue = undefined, split = true) =>
  splitKey(key, split).reduce(
    (value, part) => (value[part] === undefined ? defaultValue : value[part]),
    obj
  );

const useStore = ({
  initialState,
  rootReducer = identity,
  enhancer = identity
}) => {
  const [state, _setState] = useState(initialState || {});

  const read = useMemo(() => get(state), [state]);

  const setState = useCallback(
    newState => _setState(state => enhancer(merge(state, newState, options))),
    [enhancer]
  );

  const dispatch = useCallback(
    action => _setState(state => enhancer(rootReducer(state, action))),
    [enhancer, rootReducer]
  );

  const write = useCallback(
    (key, newValue, split = true) => {
      const parts = splitKey(key, split);

      return _setState(state =>
        enhancer(
          merge(
            state,
            parts.reduceRight(
              (v, part) => ({ [part]: v }),
              typeof newValue === "function"
                ? newValue(get(state)(parts))
                : newValue
            ),
            options
          )
        )
      );
    },
    [enhancer]
  );

  return {
    state,
    read,
    setState,
    dispatch,
    write
  };
};

export default useStore;

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
    );
    return state;
  }
});
