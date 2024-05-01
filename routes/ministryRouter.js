// import dependencies
const express = require("express");
const router = express.Router();
const {
  getMinistryTEST,
  addMinistry,
  addMinistryHistory,
  editMinistry,
  getMinistry,
  getMinistryByID,
  addMinistryAPI,
  retireMinistryById,
  getMinistryData,
  mergeMinistry,
  retireMinistry,
  splitMinistry,
  editMinistryNameById,
} = require("../controllers/ministryController.js");

// API routes
router.get("/api/test", getMinistryTEST); //testing only
router.get("/api/ministry", getMinistry);
router.post("/api/ministry", addMinistryAPI);
router.get("/api/ministry/:id", getMinistryByID);
router.delete("/api/ministry/retire/:id", retireMinistryById);
router.post("/api/ministry/addHistory", addMinistryHistory);
router.post("/api/ministry/updateName", editMinistryNameById)

// run select query and send render results to ministry view ejs file to display
router.get("/", getMinistryData);

// post method to write form data to Db to create new ministry
router.post("/addMinistry", addMinistry);
router.post("/retireMinistry", retireMinistry);
router.post("/addMinistryHistory", addMinistryHistory);
//router.post("/editMinistry", editMinistry);
router.post("/splitMinistry", splitMinistry);
//router.post("/mergeMinistry", mergeMinistry);

module.exports = router;
