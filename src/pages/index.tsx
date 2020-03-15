import React from "react"
import { useSelector } from "react-redux"

interface RootState {
  platformReducer: {
    platform: string | null
  }
}

export default () => {
  const test = (state: RootState) => state.platformReducer.platform
  const platform = useSelector(test)
  return <p>Detected platform: {platform}</p>
}
