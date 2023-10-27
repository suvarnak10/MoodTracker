const Journal = require("../models/journal")
const BigPromise = require("../middlewares/bigPromise");
const CustomError = require("../errors/customError");

exports.addJournal = BigPromise(async (req, res, next) => {
	const { feedback, emotion } = req.body;
	const currentDate = new Date();
	const userId = req.user.id; // Assuming you have user information in the request (e.g., from authentication middleware)

	if (!feedback || !emotion) {
		return next(new CustomError("Please provide feedback and emotion", 401));
	}

	try {
		const journalEntry = await Journal.create({
			date: currentDate,
			user: userId, // Set the user reference
			entries: [{ feedback, emotion }],
		});

		res.status(201).json({
			success: true,
			journalEntry,
		});
	} catch (error) {
		return next(new CustomError("Failed to create the journal entry", 500));
	}
});

exports.getJournalEntriesForDate = BigPromise(async (req, res, next) => {
	const { date } = req.query; // Assuming you pass the date as a query parameter

	if (!date) {
		return next(
			new CustomError("Please provide a date to retrieve entries for", 400)
		);
	}

	try {
		const entries = await Journal.find({ date });

		res.status(200).json({
			success: true,
			entries,
		});
	} catch (error) {
		return next(
			new CustomError(
				"Failed to retrieve journal entries for the specified date",
				500
			)
		);
	}
});

exports.get