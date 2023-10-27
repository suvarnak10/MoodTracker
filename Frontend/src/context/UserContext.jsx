import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
	const [loggedIn, setLoggedIn] = useState(false);

	const handleLogin = (value) => {
		setLoggedIn(value);
	};

	useEffect(() => {
		const isLoggedIn = localStorage.getItem("jwt");
		if (isLoggedIn) {
			handleLogin(true);
			window.addEventListener("storage", handleStorageEvent);
		} else {
			handleLogin(false);
		}

		return () => {
			window.removeEventListener("storage", handleStorageEvent);
		};
	}, []);

	const handleStorageEvent = () => {
		const isLoggedIn = localStorage.getItem("jwt");
		if (isLoggedIn) {
			handleLogin(true);
		} else {
			handleLogin(false);
		}
	};

	return (
		<UserContext.Provider value={{ loggedIn, handleLogin }}>
			{children}
		</UserContext.Provider>
	);
}

export default UserContext;
