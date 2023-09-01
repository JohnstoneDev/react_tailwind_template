import { Routes, Route } from 'react-router-dom'

// Local imports should come last
import { Home } from '../Pages/Home/Home'


export const Paths = () => {
	return (
		<div>
			<Routes>
				<Route exact path='/' element={<Home />}/>
			</Routes>
		</div>
	)
}