import { nanoid } from "nanoid"

import { sizes, colors } from "./constants"
import { ResultType } from "./_types"

export const getInitialValues = (topSizes: number[], topColors: string[], prevValues: ResultType[] | undefined) => {
  return topSizes
    .map(size => topColors
      .map(color => ({
        id: nanoid(6),
        size,
        color,
        quantity: prevValues?.find(item => item.size === size && item.color === color)?.quantity ?? 0,
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
