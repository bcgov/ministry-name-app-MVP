// import dependencies
const express = require("express");
const router = express.Router();
const {
    getAcronymAll,
    getAcronymAllToRender,
    addNewAcronym,
    addMinistryAcronym,
} = require("../controllers/acronymController.js");

// Acronym API routes:
router.get("/api", getAcronymAll);
router.post("/api/addNewAcronym", addNewAcronym);
router.post("/api/pairMinistryAcronym", addMinistryAcronym);

// run select query and send render results to acronym view ejs file to display
router.get("/", getAcronymAllToRender);

module.exports = router;
