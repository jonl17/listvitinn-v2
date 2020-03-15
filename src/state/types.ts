// state
export interface State {
  platform: null | string
}

// actions
export const SET_PLATFORM = "SET_PLATFORM"
interface SetPlatformAction {
  type: typeof SET_PLATFORM
  width: number
}
export type SetPlatformType = SetPlatformAction

// reducer
