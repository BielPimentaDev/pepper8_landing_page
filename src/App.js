import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import AppEng from './AppEng';
import AppPt from './AppPt';

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<AppEng />} />
				<Route path='/pt' element={<AppPt />} />
			</Routes>
		</Router>
	);
}

export default App;
