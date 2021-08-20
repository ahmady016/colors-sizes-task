import React from 'react'

import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

import { sizes } from '../constants'

function SizesDropdown({ value, allSelectedSizes, setAllSelectedSizes }) {
	const [size, setSize] = React.useState(value)
	const handleChange = (e) => {
		let selectedValue = e.target.value
		console.log(selectedValue)
		console.log(allSelectedSizes)
		if (!allSelectedSizes.includes(selectedValue)) {
			setAllSelectedSizes((sizes) => [
				...sizes.filter((_size) => _size !== size),
				selectedValue,
			])
			setSize(selectedValue)
		}
	}
	return (
		<FormControl>
			<InputLabel id="demo-simple-select-label">Sizes</InputLabel>
			<Select
				labelId="sizes-dropdown"
				id="sizes-dropdown"
				value={size}
				onChange={handleChange}
			>
				{sizes.map((item) => (
					<MenuItem key={item} value={item}>
						{item}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	)
}

export default SizesDropdown
