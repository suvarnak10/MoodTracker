const Journal = require("../models/journal")
const BigPromise = require("../middlewares/bigPromise");
const CustomError = require("../errors/customError");
const mongoose = require('mongoose')
const moment = require("moment");

exports.addJournal = BigPromise(async (req, res, next) => {
	const { feedback,userId} = req.body;
	const currentDate = moment().format("DD/MM/YYYY");
	console.log(currentDate)
	if (!feedback || !userId) {
		return next(new CustomError("Please provide feedback and emotion", 401));
	}

	var formdata = new FormData();
	formdata.append("input", feedback);

	var requestOptions = {
		method: "POST",
		body: formdata,
		redirect: "follow",
	};

	
    fetch("http://haleel.pythonanywhere.com/test", requestOptions)
			.then((response) => response.json()) // Assuming the response is in JSON format
			.then(async (emotionsData) => {
				// Parse the response and store it in an object
				const emotions = {
					negative: emotionsData.negative,
					neutral: emotionsData.neutral,
					positive: emotionsData.positive,
				};

				const trimmedUserId = userId.slice(1, -1);

				// Create a journal entry with the emotions data
				const journalEntry = await Journal.create({
					date: currentDate,
					user: trimmedUserId,
					entries: {
						feedback,
						emotions, // Store the emotions object
					},
				});

				res.status(201).json({
					success: true,
					journalEntry,
				});
			})
			.catch((error) => {
				console.log("Error:", error);
				return next(new CustomError("Failed to fetch external data", 500));
			});
});

exports.getSumOfEmotionsForDay = async (req, res, next) => {
	const userId = req.query.userId;
const currentDate = moment().format("DD/MM/YYYY");
	if (!userId) {
		return next(new CustomError("Please provide a valid user ID", 400));
	}

	try {
		const trimmedUserId = userId.slice(1, -1);
		Journal.find({
			date: currentDate,
			user: trimmedUserId, // Assuming 'user' is the field containing the user ID
		})
			.then((documents) => {
				// The 'documents' variable now contains an array of documents that match the criteria
				console.log(documents);
			})
			.catch((error) => {
				// Handle any errors that may occur during the query
				console.error(error);
			});

		if (result.length === 0) {
			return next(
				new CustomError("No entries found for the specified date and user", 404)
			);
		}

		console.log("Emotion Sums:", result[0]);

		res.status(200).json({
			success: true,
			sumNegative: result[0].sumNegative,
			sumNeutral: result[0].sumNeutral,
			sumPositive: result[0].sumPositive,
		});
	} catch (error) {
		console.error("Error:", error);
		return next(
			new CustomError(
				"Failed to calculate emotion sums for the specified date and user",
				500
			)
		);
	}
};

