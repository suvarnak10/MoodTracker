import  { useState, useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

const NewJournal = () => {
	const [showCreateChat, setShowCreateChat] = useState(true);

	const navigate = useNavigate();

	const handleClick = () => {
		let chatId = JSON.parse(localStorage.getItem("chatId"));
		if (chatId) {
			navigate(`/dashboard/journal/${chatId}`);
		} else {
			chatId = uuidv4();
			localStorage.setItem("chatId", JSON.stringify(chatId));
			navigate(`/dashboard/journal/${chatId}`);
		}
	};

	useEffect(() => {
		const handleResize = () => {
			setShowCreateChat(window.innerWidth > 400);
		};

		handleResize(); // Initial check on component mount

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);
	return (
		<div>
			<button
				onClick={handleClick}
				className="bg-black text-white flex items-center gap-2 justify-around w-auto px-5  py-5 mr-14 sm:px-10 sm:py-5 sm:mr-20 rounded-xl cursor-pointer transform transition duration-500 hover:md:scale-105"
			>
				<AiOutlinePlus />
				{showCreateChat ? "Add new journal" : ""}
			</button>
		</div>
	);
};

export default NewJournal;
