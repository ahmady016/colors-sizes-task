import React from 'react'

import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

import { sizes } from '../constants'
import { SizesDropdownProps } from '../_types'

const SizesDropdown : React.FC<SizesDropdownProps> = ({ value, allSelectedSizes, setAllSelectedSizes }) => {
	const [size, setSize] = React.useState<number>(value)
	const handleChange = (e: any) => {
		let selectedValue = e.target.value
		if (!allSelectedSizes.includes(selectedValue)) {
			setAllSelectedSizes((sizes) => [
				...sizes.filter((_size) => _size !== size),
				selectedValue,
			])
			setSize(selectedValue)
		}
	}
	return (
		<FormControl fullWidth>
			<InputLabel id="demo-simple-select-label">Sizes</InputLabel>
			<Select
				labelId="sizes-dropdown"
				id="sizes-dropdown"
				value={size}
				onChange={handleChange}
				fullWidth
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
