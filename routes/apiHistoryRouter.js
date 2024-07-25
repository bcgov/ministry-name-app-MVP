// import dependencies
const express = require("express");
const router = express.Router();
const {
  getHistoryAllApi,
  getHistoryById,
} = require("../controllers/api/apiHistoryController.js");

// history api routers
router.get("/all", getHistoryAllApi);
router.get("/byMinistryId/:id", getHistoryById);

module.exports = router;
