// import dependencies
const express = require('express');
const router = express.Router();
const {getMinistryData} = require('../controllers/ministryController.js');


// run select query and send render results to ministry view ejs file to display 
router.get("/", getMinistryData);

module.exports = router;