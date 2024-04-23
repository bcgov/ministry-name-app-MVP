// import dependencies
const express = require('express');
const router = express.Router();
const {addMinistry,
    addMinistryHistory,
    editMinistry,
    getMinistry,
    getMinistryData,
    mergeMinistry,
    retireMinistry,
    splitMinistry
    } = require('../controllers/ministryController.js');


// run select query and send render results to ministry view ejs file to display 
router.get("/", getMinistryData);
router.get("/getMinistry", getMinistry);
// post method to write form data to Db to create new ministry
router.post("/addMinistry", addMinistry);
router.post("/retireMinistry", retireMinistry);
router.post("/addMinistryHistory", addMinistryHistory);
router.post("/editMinistry", editMinistry);
router.post("/splitMinistry", splitMinistry);
router.post("/mergeMinistry", mergeMinistry);

module.exports = router;