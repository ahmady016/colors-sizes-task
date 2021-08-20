import { nanoid } from "nanoid"
import { sizes, colors } from "./constants"

export const getInitialValues = (topSizes: number[], topColors: string[]) =>
  () => {
    return topSizes
      .map(size => topColors
        .map(color => ({
          id: nanoid(6),
          size,
          color,
          quantity: 0,
        })
        )
      )
      .flat()
  }

export const getNextSizeValue = (selectedSizes: number[]) => {
  let i = 0
  while (selectedSizes.includes(sizes[i])) {
    i++
  }
  return sizes[i]
}

export const getNextColorValue = (selectedColors: string[]) => {
  let i = 0
  while (selectedColors.includes(colors[i])) {
    i++
  }
  return colors[i]
}
