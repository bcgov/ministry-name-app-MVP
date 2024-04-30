// import dependencies
const express = require("express");
const router = express.Router();
const {
    getAcronymAll,
    getAcronymAllToRender,
    addNewAcronym,
    addMinistryAcronym,
    getAcronymById,
    getAcronymIdByMinistryId,
    updateMinistryAcronym,
    updateMinistryAcronymHistory
} = require("../controllers/acronymController.js");

// Acronym API routes:
router.get("/api", getAcronymAll);
router.get("/api/ByAcronymId/:id", getAcronymById);
router.get("/api/ByMinId/:id", getAcronymIdByMinistryId);
router.post("/api/addNewAcronym", addNewAcronym);
router.post("/api/pairMinistryAcronym", addMinistryAcronym);
router.post("/api/updateAcr", updateMinistryAcronym);
router.post("/api/addAcrHistory", updateMinistryAcronymHistory);

// run select query and send render results to acronym view ejs file to display
router.get("/", getAcronymAllToRender);

module.exports = router;
