// import dependencies
const express = require("express");
const router = express.Router();
const { getAcronymAllToRender } = require("../controllers/acronymController.js");

// run select query and send render results to acronym view ejs file to display
router.get("/", getAcronymAllToRender);

module.exports = router;
