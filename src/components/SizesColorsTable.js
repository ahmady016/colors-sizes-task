import React from 'react'

import Paper from '@material-ui/core/Paper'
import TableContainer from '@material-ui/core/TableContainer'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import AddCircleIcon from '@material-ui/icons/AddCircle'

import SizesDropdown from './SizesDropdown'
import ColorsDropdown from './ColorsDropdown'
import QuantityInput from './QuantityInput'

import { sizes, colors } from '../constants'
import { getInitialValues, getNextSizeValue, getNextColorValue } from '../helpers'

function SizesColorsTable({ sizesCols, colorsRows }) {
	const [topSizes, setTopSizes] = React.useState(() => sizes.slice(0, sizesCols))
	const [topColors, setTopColors] = React.useState(() => colors.slice(0, colorsRows))

	const [allSelectedSizes, setAllSelectedSizes] = React.useState([...topSizes])
	const [allSelectedColors, setAllSelectedColors] = React.useState([...topColors])

	const [result, setResult] = React.useState(() => getInitialValues(topSizes, topColors))

	const addMoreSize = React.useCallback(e => {
		const newSizes = [...topSizes, getNextSizeValue(allSelectedSizes)]
		setTopSizes(newSizes)
		setAllSelectedSizes([...newSizes])
		setResult(getInitialValues(newSizes, topColors, result))
	}, [topSizes, topColors, allSelectedSizes, result])

	const addMoreColor = React.useCallback(e => {
		const newColors = [...topColors, getNextColorValue(allSelectedColors)]
		setTopColors(newColors)
		setAllSelectedColors([...newColors])
		setResult(getInitialValues(topSizes, newColors, result))
	}, [topSizes, topColors, allSelectedColors, result])

	return (
		<>
			<TableContainer component={Paper}>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Colors / Sizes</TableCell>
							{topSizes.map((size) => (
								<TableCell key={size}>
									<SizesDropdown
										value={size}
										allSelectedSizes={allSelectedSizes}
										setAllSelectedSizes={setAllSelectedSizes}
									/>
								</TableCell>
							))}
							<TableCell>
								<IconButton color="primary" aria-label="add more size" onClick={addMoreSize}>
									<AddCircleIcon />
								</IconButton>
							</TableCell>
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
								{/* total color quantities */}
								<TableCell style={{ textAlign: 'center' }}>
									{result
										.filter(item => item.color === color)
										.reduce((total, item) => total + item.quantity ,0)
									}
								</TableCell>
							</TableRow>
						))}
						{/* total size quantities */}
						<TableRow>
							<TableCell>
								<IconButton color="primary" aria-label="add more size" onClick={addMoreColor}>
									<AddCircleIcon />
								</IconButton>
							</TableCell>
							{topSizes.map(size => (
								<TableCell key={size}>
									{result
										.filter(item => item.size === size)
										.reduce((total, item) => total + item.quantity ,0)
									}
								</TableCell>
							))}
						</TableRow>
					</TableBody>
				</Table>
			</TableContainer>
			<br />
			<Button
				variant="contained"
				color="primary"
				size="large"
				onClick={_ => console.log('Saved Values: ', result)}
			>
				Save
			</Button>
			<br />
		</>
	)
}

export default SizesColorsTable
