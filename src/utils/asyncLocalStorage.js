const asyncLocalStorage = {
  setItem: async (key, value) => {
    await null;
    return localStorage.setItem(key, value);
  },
  getItem: async key => {
    await null;
    return localStorage.getItem(key);
  }
};

export default asyncLocalStorage;
