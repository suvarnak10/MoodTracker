import { NavLink } from "react-router-dom";
import heroImg from "../assets/hero.png";

const Home = () => {
	return (
		<main className="flex flex-col w-full h-screen">
			<div className="flex items-center justify-around gap-3">
				<div className="w-full  md:w-1/2 ">
					<h2 className="font-Outfit text-4xl md:text-6xl uppercase font-bold break-normal text-black-400 text-center mt-20 md:ml-12 md:text-left ">
						learning to speak english has never been easier
					</h2>
					<div className="flex gap-5 md:ml-12 md:justify-normal justify-center mt-10 md:mt-5 ">
						<NavLink
							to="/login"
							className="bg-black text-white px-6 py-3 rounded-xl hover:shadow-sm hover:shadow-slate-400"
						>
							Login
						</NavLink>
						<NavLink
							to="/signup"
							className="border border-black text-black  px-6 py-3 rounded-xl hover:shadow-sm hover:shadow-slate-400"
						>
							Signup
						</NavLink>
					</div>
				</div>
				<div className="hidden md:block">
					<img src={heroImg} className="w-[340px] h-[520px]" />
				</div>
			</div>
		</main>
	);
};

export default Home;
