import React from 'react'

import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

import { colors } from '../constants'

function ColorsDropdown({ value, allSelectedColors, setAllSelectedColors }) {
	const [color, setColor] = React.useState(value)
	const handleChange = (e) => {
		let selectedColor = e.target.value
		if (!allSelectedColors.includes(selectedColor)) {
			setAllSelectedColors((colors) => [
				...colors.filter((_color) => _color !== color),
				selectedColor,
			])
			setColor(selectedColor)
		}
	}
	return (
		<FormControl>
			<InputLabel id="demo-simple-select-label">Colors</InputLabel>
			<Select
				labelId="colors-dropdown"
				id="colors-dropdown"
				value={color}
				onChange={handleChange}
			>
				{colors.map((item) => (
					<MenuItem key={item} value={item}>
						{item}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	)
}

export default ColorsDropdown
