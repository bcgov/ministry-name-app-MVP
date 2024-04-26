// dependecies
const pool = require("../db/dbConnectionConfig.js");
const { fetchData } = require("../utils/helperfunctions.js");
const asyncHandler = require("express-async-handler");
const { queryAcronymsAll, queryAcronymsAllTEST} = require("../db/queries.js");

// API's for database:

// get acronym data and render to history view
const getAcronymAll = (req, res) => {
  pool.query(queryAcronymsAll, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

// render ejs page:
const getAcronymAllToRender = asyncHandler(async (req, res) => {
  try {
    // Call fetchData to retrieve data from the db
    const theAcronymData = await fetchData(pool, queryAcronymsAll);
    res.render("acronym", { title: "Acronym" });
  } catch (err) {
    console.error("Error fetching Acronym data:", err);
    res.redirect("/error");
  }
});
module.exports = { getAcronymAll, getAcronymAllToRender };
