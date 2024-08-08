// import dependencies
const express = require('express');
const router = express.Router();
const {displaySuccess} = require('../controllers/frontEnd/successController.js');


// render success view ejs file to display 
router.get("/", displaySuccess);


module.exports = router;