import { createPersistentStoreCreator } from "hooks/useStore";

export const localStorageStoreCreator = createPersistentStoreCreator({
  serialize: JSON.stringify,
  deserialize: JSON.parse,
  load: key => window.localStorage.getItem(key),
  save: (key, value) => window.localStorage.setItem(key, value)
});
