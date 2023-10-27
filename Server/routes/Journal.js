const express = require("express");
const router = require("express").Router();
const { addJournal ,getSumOfEmotionsForDay} = require("../controllers/journalController");

router.route("/journal").post(addJournal);
router.route("/getDailyEmotion").get(getSumOfEmotionsForDay);



module.exports = router;
