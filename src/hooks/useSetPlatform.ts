import { useState, useEffect } from "react"

export const useSetPlatform = () => {
  const [platform, setPlatform] = useState(<null | number>null)

  useEffect(() => {
    if (typeof window !== `undefined`) {
      setPlatform(window.innerWidth)
      addEventListener("resize", () => setPlatform(window.innerWidth))

      return () =>
        removeEventListener("resize", () => setPlatform(window.innerWidth))
    }
  }, [])
  return {
    platform,
  }
}
