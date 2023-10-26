import { Routes, Route } from "react-router-dom";
import Error from "./pages/Error";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Landing />}>
					<Route index element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
				</Route>
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</div>
	);
}

export default App;
