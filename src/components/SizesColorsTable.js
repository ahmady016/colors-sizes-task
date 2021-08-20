import React from 'react'
import { nanoid } from 'nanoid'

import Paper from '@material-ui/core/Paper'
import TableContainer from '@material-ui/core/TableContainer'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Button from '@material-ui/core/Button'

import SizesDropdown from './SizesDropdown'
import ColorsDropdown from './ColorsDropdown'
import QuantityInput from './QuantityInput'

import { sizes, colors } from '../constants'

function SizesColorsTable({ sizesCols, colorsRows }) {
	const topSizes = sizes.slice(0, sizesCols)
	const topColors = colors.slice(0, colorsRows)
	const initialResult = topSizes
		.map((size) => {
			return topColors.map((color) => ({
				id: nanoid(),
				size,
				color,
				quantity: 0,
			}))
		})
		.flat()

	const [allSelectedSizes, setAllSelectedSizes] = React.useState(topSizes)
	const [allSelectedColors, setAllSelectedColors] = React.useState(topColors)
	const [result, setResult] = React.useState(initialResult)

	React.useEffect(() => {
		console.log(result)
	}, [result])

	return (
		<>
			<TableContainer component={Paper}>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Colors</TableCell>
							{topSizes.map((size) => (
								<TableCell key={size}>
									<SizesDropdown
										value={size}
										allSelectedSizes={allSelectedSizes}
										setAllSelectedSizes={setAllSelectedSizes}
									/>
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{topColors.map((color, colorIndex) => (
							<TableRow key={color}>
								<TableCell>
									<ColorsDropdown
										value={color}
										allSelectedColors={allSelectedColors}
										setAllSelectedColors={setAllSelectedColors}
									/>
								</TableCell>
								{topSizes.map((size, sizeIndex) => (
									<TableCell key={size}>
										<QuantityInput
											index={`[${sizeIndex},${colorIndex}]`}
											size={size}
											color={color}
											setResult={setResult}
										/>
									</TableCell>
								))}
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			<br />
			<Button
				variant="contained"
				color="primary"
				onClick={(e) => console.log('Saved Values: ', result)}
			>
				Save
			</Button>
		</>
	)
}

export default SizesColorsTable