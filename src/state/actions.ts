import { SET_PLATFORM, SetPlatformType } from "./types"

export const setPlatform = (width: number): SetPlatformType => ({
  type: SET_PLATFORM,
  width,
})
