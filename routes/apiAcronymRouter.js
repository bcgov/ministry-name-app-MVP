// import dependencies
const express = require("express");
const router = express.Router();
const {
    getAcronymAll,
    addNewAcronym,
    addMinistryAcronym,
    getAcronymById,
    getAcronymIdByMinistryId,
    updateMinistryAcronym,
    updateMinistryAcronymHistory
} = require("../controllers/apiAcronymController.js");

// Acronym API routes:
router.get("/", getAcronymAll);
router.get("/ByAcronymId/:id", getAcronymById);
router.get("/ByMininistryId/:id", getAcronymIdByMinistryId);
router.post("/addNewAcronym", addNewAcronym);
router.post("/pairMinistryAcronym", addMinistryAcronym);
router.post("/updateMinistryAcronym", updateMinistryAcronym);
router.post("/addAcronymHistory", updateMinistryAcronymHistory);

module.exports = router;