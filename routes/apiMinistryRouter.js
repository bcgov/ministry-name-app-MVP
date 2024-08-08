// import dependencies
const express = require("express");
const router = express.Router();
const {
  getMinistryTEST,
  addMinistryHistory,
  getMinistry,
  getMinistryByID,
  addMinistryAPI,
  retireMinistryById,
  editMinistryNameById,
} = require("../controllers/api/apiMinistryController.js");

// API routes
router.get("/test", getMinistryTEST); //testing only
router.get("/", getMinistry);
router.post("/", addMinistryAPI);
router.get("/:id", getMinistryByID);
router.delete("/retire/:id", retireMinistryById);
router.post("/addHistory", addMinistryHistory);
router.post("/updateName", editMinistryNameById);
router.post("/addMinistryHistory", addMinistryHistory);

module.exports = router;