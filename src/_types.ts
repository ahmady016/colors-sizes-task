export type ResultType = {
  id: string
  color: string
  size: number
  quantity: number
}

export type SizesColorsTableProps = {
  sizesCols: number
  colorsRows: number
}

export type QuantityInputProps = {
  index: string
  size: number
  color: string
  setResult: React.Dispatch<React.SetStateAction<ResultType[]>>
}

export type SizesDropdownProps = {
  value: number
  allSelectedSizes: number[]
  setAllSelectedSizes: React.Dispatch<React.SetStateAction<number[]>>
}

export type ColorsDropdownProps = {
  value: string
  allSelectedColors: string[]
  setAllSelectedColors: React.Dispatch<React.SetStateAction<string[]>>
}
