import  { useState } from "react";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { NavLink } from "react-router-dom";

const menuItems = [
	{
		title: "Home",
		path: "/",
	},
	{
		title: "About",
		path: "#",
	},
	{
		title: "features",
		path: "#",
	},
];

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleNav = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="flex justify-between gap-3 px-2 py-8 ">
			<div className="md:px-32 -ml-6 sm:ml-0 px-10 font-Outfit font-bold text-black-700 text-xl cursor-pointer">
				<NavLink to="/">LOGO</NavLink>
			</div>
			<ul className="hidden md:flex  px-20 gap-20 list-none">
				{menuItems.map((navItem) => (
					<li
						className="font-Outfit font-regular text-xl   hover:text-indigo-400"
						key={navItem.title}
					>
						<NavLink to={navItem.path}>{navItem.title}</NavLink>
					</li>
				))}
			</ul>
			<div className="md:hidden ml-auto  mr-2">
				{!isOpen && <RxHamburgerMenu size={20} onClick={toggleNav} />}
			</div>

			{isOpen && (
				<div className="md:hidden w-full -mt-8 py-5 px-5 z-50 shadow bg-white fixed right-0">
					<div className="flex justify-end pr-2 pt-1">
						<div onClick={toggleNav} className="-m-4">
							{isOpen && <RxCross2 size={20} />}
						</div>
					</div>
					<ul className="py-4 text-center">
						{menuItems.map((navItem) => (
							<li
								className="font-Outfit font-regular text-xl hover:text-indigo-400"
								key={navItem.title}
							>
								<NavLink to={navItem.path} onClick={toggleNav}>
									{navItem.title}
								</NavLink>
							</li>
						))}
					</ul>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
