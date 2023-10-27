import React, { useContext, useEffect } from "react";
import DashboardNav from "../components/DashboardNav";
import { Outlet, useNavigate } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";

const Dashboard = () => {
	const navigate = useNavigate();

	useEffect(() => {
		if (!isAuthenticated()) {
			navigate("/login");
		}
	}, [navigate, isAuthenticated]);

	return (
		<div className="flex">
			<DashboardNav />
			<Outlet />
		</div>
	);
};

export default Dashboard;
