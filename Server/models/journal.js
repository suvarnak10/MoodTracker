const mongoose = require("mongoose");

const journalSchema = new mongoose.Schema(
	{
		date: {
			type: Date,
			required: true,
		},
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User", // Reference to the User model
			required: true,
		},
		entries: [
			{
				feedback: {
					type: String,
					required: true,
				},
				emotion: {
					type: String,
					required: true,
					enum: {
						values: ["happy", "sad", "neutral"],
						message: "Please select a category from - happy, sad, neutral.",
					},
				},
			},
		],
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Journal", journalSchema);
