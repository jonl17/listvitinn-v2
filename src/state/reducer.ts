import { State, SET_PLATFORM, SetPlatformType } from "./types"

const initialState: State = {
  platform: null,
}

export const platformReducer = (
  state = initialState,
  action: SetPlatformType
): State => {
  switch (action.type) {
    case SET_PLATFORM:
      let platform = null
      if (action.width <= 750) platform = `mobile`
      else if (action.width > 750 && action.width <= 1050) platform = `tablet`
      else platform = `desktop`
      return { ...state, platform: platform }
    default:
      return state
  }
}
