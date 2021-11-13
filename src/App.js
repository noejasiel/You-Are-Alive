import React from 'react';
import Brujula from './components/Brujula';
import MapView from './components/MapView';
import {Routes, Route, BrowserRouter} from 'react-router-dom';

const App = ()=>(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<MapView/>}/>
			<Route path="/hom" element={<Brujula/>}/>
		</Routes>
	</BrowserRouter>
)

export default App;
