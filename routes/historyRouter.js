// import dependencies
const express = require("express");
const router = express.Router();
const { getHistory } = require("../controllers/historyController.js");

// run select query and send render results to history view ejs file to display
router.get("/", getHistory);

module.exports = router;
