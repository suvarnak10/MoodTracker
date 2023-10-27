
import ChartLayout from "./ChartLayout";
import NewJournal from "./NewJournal";

const DashboardLayout = () => {
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
				<ChartLayout />
			</div>
		</div>
	);
};

export default DashboardLayout;
