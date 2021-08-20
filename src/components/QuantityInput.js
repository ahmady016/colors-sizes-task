import React from "react"

import TextField from "@material-ui/core/TextField"

function QuantityInput({ index, color, size, setResult }) {
  const [quantity, setQuantity] = React.useState(0)
  const handleChange = (e) => {
    let currentQuantity = parseFloat(e.target.value.trim() || 0)
    setResult((result) =>
      result.map((item) =>
        item.color === color && item.size === size
          ? {
              size,
              color,
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
      value={quantity}
      onChange={handleChange}
    />
  );
}

export default QuantityInput
