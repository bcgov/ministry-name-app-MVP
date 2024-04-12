// import dependencies
const express = require('express');
const router = express.Router();
const {displaySuccess} = require('../controllers/successController.js');


// render success view ejs file to display 
router.get("/success", displaySuccess);


module.exports = router;