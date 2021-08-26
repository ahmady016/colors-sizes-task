import React from "react"

import TextField from "@material-ui/core/TextField"
import { QuantityInputProps } from "../_types"

const QuantityInput : React.FC<QuantityInputProps> = ({ index, color, size, setResult }) => {
  const [quantity, setQuantity] = React.useState<number>(0)
  const handleChange = (e: any) => {
    let currentQuantity = parseFloat(e.target.value)
    setResult((result) =>
      result.map((item) =>
        item.color === color && item.size === size
          ? {
              ...item,
              quantity: currentQuantity
            }
          : item
      )
    );
    setQuantity(currentQuantity);
  };

  return (
    <TextField
      id={`quantity-${index}`}
      label="Quantity"
      type="number"
      value={quantity}
      onChange={handleChange}
    />
  );
}

export default QuantityInput
