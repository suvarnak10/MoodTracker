const express = require("express");
const router = require("express").Router();
const { addJournal } = require("../models/journal");

router.route("/journal").post(addJournal);


module.exports = router;
