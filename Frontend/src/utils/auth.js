import axios from "../api/axios";

export const signup = async (user) => {
	return await axios
		.post("/signup", user)
		.then((response) => {
			return response.data;
		})
		.catch((error) => error);
};

export const signin = async (user) => {
	return await axios
		.post("/login", user)
		.then((response) => response.data)
		.catch((error) => error);
};

export const authenticate = (data) => {
	if (typeof window !== undefined) {
		localStorage.setItem("jwt", JSON.stringify(data.token));
		localStorage.setItem("username", JSON.stringify(data.user.name));
		localStorage.setItem("userId", JSON.stringify(data.user.user_id));
		console.log("set values in local storage");
	}
};

export const signout = async () => {
	if (typeof window !== undefined) {
		localStorage.removeItem("jwt");
		localStorage.removeItem("username");
		localStorage.removeItem("userId");

		return await axios
			.get("/logout")
			.then((response) => console.log("signout success"))
			.catch((error) => console.log(error));
	}
};

export const isAuthenticated = () => {
	if (typeof window === undefined) {
		return false;
	}
	if (localStorage.getItem("jwt")) {
		return true;
	} else {
		return false;
	}
};
