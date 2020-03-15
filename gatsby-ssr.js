import React from "react"
import { Provider } from "react-redux"
import { createStore as createAppStore } from "redux"
import rootReducer from "./src/state"

const createStore = () => createAppStore(rootReducer)

export const wrapRootElement = ({ element }) => {
  return <Provider store={createStore()}>{element}</Provider>
}
