// dependecies
const pool = require("../db/dbConnectionConfig.js");
const { fetchData } = require("../utils/helperfunctions.js");
const asyncHandler = require("express-async-handler");
const { queryAcronymsAll, queryAcronymsAllTEST, queryAddAcronym,
  queryAcronymById,
  queryAddMinistryAcronym,
  queryAcronymExistsCheck, } = require("../db/queries.js");

// API's for database:

// get acronym data
const getAcronymAll = (req, res) => {
  try {
    pool.query(queryAcronymsAll, (results) => {
      res.status(200).json(results.rows);
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

// add new acronym
const addNewAcronym = (req, res) => {
  try {
    const { acronymNew, effectiveDateAcronym } = req.body;
    pool.query(queryAcronymExistsCheck, [acronymNew], (error, results) => {
      if (error) {
        // Handle query error
        console.error("Error checking for existing acronym:", error);
        return res.status(500).send("Internal Server Error");
      }
      if (results.rows.length) {
        return res.status(400).send("This acronym already exists");
      } else {
        // add new acronym (without assigning a ministry)
        pool.query(
          queryAddAcronym,
          [acronymNew, effectiveDateAcronym],
          (error, results) => {
            if (error) {
              // Handle query error
              console.error("Error adding new acronym:", error);
              return res.status(500).send("Internal Server Error");
            }
            res.status(201).send(`${acronymNew} successfully created.`);
          });
      }
    });
  } catch (err) {
    // Handle synchronous error
    console.error("Synchronous error:", err);
    res.status(500).json(err);
  }
};
// Add to ministry_acronym table
const addMinistryAcronym = (req, res) => {
  try {
    const { MinToAssign, AcrToAssign } = req.body;
      pool.query(
        queryAddMinistryAcronym,
        [ MinToAssign, AcrToAssign],
        (error, results) => {
          if (error) {
            // Handle query error
            console.error("Error adding new acronym:", error);
            return res.status(500).send("Internal Server Error");
          }
          res.status(201).send(`Acronym and Ministry successfully paired.`);
        });
      }catch (err) {
    // Handle synchronous error
    console.error("Synchronous error:", err);
    res.status(500).json(err);
  }
};

// render ejs page:
const getAcronymAllToRender = asyncHandler(async (req, res) => {
  try {
    // Call fetchData to retrieve data from the db
    const theAcronymData = await fetchData(pool, queryAcronymsAll);
    res.render("acronym", { title: "Acronym", data: theAcronymData.rows });
  } catch (err) {
    console.error("Error fetching Acronym data:", err);
    res.redirect("/error");
  }
});


module.exports = { getAcronymAll, getAcronymAllToRender, addNewAcronym, addMinistryAcronym };
