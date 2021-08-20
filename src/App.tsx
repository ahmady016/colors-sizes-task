import React from 'react'

import SizesColorsTable from './components/SizesColorsTable'

import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

function App() {
	return (
		<Container maxWidth="md">
			<Typography component="h1" variant="h3">Colors Sizes Data Grid</Typography>
			<SizesColorsTable sizesCols={3} colorsRows={3} />
		</Container>
	)
}

export default App
