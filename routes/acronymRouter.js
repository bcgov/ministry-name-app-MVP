// import dependencies
const express = require("express");
const router = express.Router();
const {
    getAcronymAll,
    getAcronymAllToRender,
} = require("../controllers/acronymController.js");

// Acronym API routes:
router.get("/api", getAcronymAll);

// run select query and send render results to acronym view ejs file to display
router.get("/", getAcronymAllToRender);

module.exports = router;
