import React, { createContext } from "react";

import useStore from "hooks/useStore";
import { localStorageStoreCreator } from "utils/store";

const ProfileContext = createContext({});

const storeConfig = localStorageStoreCreator({
  name: "my-invoicing/profile"
});

export const ProfileProvider = props => {
  const value = useStore(storeConfig);

  return <ProfileContext.Provider value={value} {...props} />;
};

export default ProfileContext;
