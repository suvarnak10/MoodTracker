
import avatar from "../assets/avatar.svg";

const Avatar = (props) => {
	return (
		<>
			<div className="mt-10 ml-20 w-[95px] h-[90px]">
				<img src={avatar} />
			</div>
			<p className="p-5 ml-20">{props.name}</p>
		</>
	);
};

export default Avatar;
