import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Landing = () => {
	return (
		<div className="h-screen">
			<Navbar />
			<Outlet />
		</div>
	);
};

export default Landing;
