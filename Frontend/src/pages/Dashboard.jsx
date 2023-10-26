import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
            <h1>Dashboard</h1>
		</div>
	);
};

export default Dashboard;
