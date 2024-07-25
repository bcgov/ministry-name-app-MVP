// import dependencies
const express = require('express');
const router = express.Router();
const {displayError} = require('../controllers/frontEnd/errorController.js');


// render success view ejs file to display 
router.get("/", displayError);


module.exports = router;