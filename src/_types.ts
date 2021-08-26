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
