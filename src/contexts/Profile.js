import React, { createContext } from "react"

import useStore from "hooks/useStore"
import { localStorageStoreCreator } from "utils/store"

const ProfileContext = createContext({})

export const ProfileProvider = props => {
  const value = useStore(
    localStorageStoreCreator({
      name: "my-invoicing/profile"
    })
  )

  return <ProfileContext.Provider value={value} {...props} />
}

export default ProfileContext
