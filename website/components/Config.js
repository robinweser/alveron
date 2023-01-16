import React, { createContext, useContext } from 'react'

const Context = createContext()

export function ConfigProvider({ config, children }) {
  return <Context.Provider value={config}>{children}</Context.Provider>
}

export function useConfig() {
  return useContext(Context)
}
