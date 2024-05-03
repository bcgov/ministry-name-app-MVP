// import dependencies
const express = require('express');
const router = express.Router();
const {getHistory, getHistoryAllApi, getHistoryById} = require('../controllers/historyController.js');

// run select query and send render results to history view ejs file to display 
router.get("/", getHistory);
router.get("/api/all", getHistoryAllApi);
router.get("/api/byMinistryId/:id", getHistoryById);

module.exports = router;