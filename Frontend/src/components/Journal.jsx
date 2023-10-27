
const Journal = () => {

	const handleClick = () => {
		
	}

	return (
		<div className="flex justify-center mt-10 mx-auto  bg-black rounded-md">
			<form className="mt-5 flex flex-col px-5">
				<label className="text-white my-3">Write about your day:</label>
				<textarea name="postContent" rows={10} cols={40} />
				<button onClick={handleClick} className="bg-green-400 text-black px-5 py-2 mt-3">
					Submit
				</button>
			</form>
		</div>
	);
};

export default Journal;
