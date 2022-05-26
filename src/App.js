import "./App.css";
import Csvtable from "./Pages/Servers/CsvTable/Csvtable";
import Login from "./Pages/Login/Login";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import MainLayout from "./Components/Layout/Layout";
import Servers from "./Pages/Servers/Servers";

function App() {
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route path="/" element={<Login />} exact />
					<Route path="csv" element={<Csvtable />} exact />
					<Route path="welcome" element={<MainLayout />} exact>
						<Route path="servers" element={<Servers />} exact />
					</Route>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
