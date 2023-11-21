import { isHosted } from "./isHosted"

export const getSubdomain = (hostname: string, slug: string) => {
  return isHosted()
    ? hostname?.split(":")[0].split(".")[0]
    : (slug as string)
}
