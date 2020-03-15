import React from "react"
import { useSetPlatform } from "../hooks/useSetPlatform"
import { useDispatch } from "react-redux"
import { SET_PLATFORM } from "../state/types"

type Props = {
  children: React.ReactChild
}

export default ({ children }: Props) => {
  const dispatch = useDispatch()
  dispatch({ type: SET_PLATFORM, width: useSetPlatform().platform })
  return children
}
