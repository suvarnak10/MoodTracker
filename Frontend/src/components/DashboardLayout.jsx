import { useEffect,useState } from "react";
import ChartLayout from "./ChartLayout";
import NewJournal from "./NewJournal";
import axios from "../api/axios";


const DashboardLayout = () => {

	const [positive,setPositive] = useState(0)
	const [negative, setNegative] = useState(0);
	const [neutral, setNeutral] = useState(0);


	const fetchData = async () => {
		const userId = localStorage.getItem("userId");
		try {
			const { data } = await axios.get("/getDailyEmotion", {
				params: { userId: userId },
			});
			setPositive(data.sumPositive);
			setNegative(data.sumNegative);
			setNeutral(data.sumNeutral);
			console.log(positive,negative,neutral)

			
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};

	useEffect(() => {
		fetchData();
	}, []); 

	return (
		<div className="flex flex-col ">
			<div className="flex justify-between overflow-x-hidden  w-full mt-10 pl-10">
				<div className="flex flex-col gap-4  md:mt-5 sm:gap-14">
					<h2 className="text-3xl">Mood Analyser</h2>
					<p className="text-gray-400">Analysis</p>
				</div>
			<NewJournal/>
			</div>
			<div className=" -ml-10 mt-5 sm:ml-10">
				<ChartLayout positive={positive} negative={negative} neutral={neutral} />
			</div>
		</div>
	);
};

export default DashboardLayout;
