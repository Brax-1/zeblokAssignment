import "./App.css";
import Csvtable from "./Pages/CsvTable/Csvtable";
import Login from "./Pages/Login/Login";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

function App() {
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/csv" element={<Csvtable />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
