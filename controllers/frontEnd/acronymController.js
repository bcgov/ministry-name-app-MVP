// dependecies
const pool = require("../../db/dbConnectionConfig.js");
const { fetchData } = require("../../utils/helperfunctions.js");
const asyncHandler = require("express-async-handler");
const { queryAcronymsAll } = require("../../db/queries.js");

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

module.exports = {
  getAcronymAllToRender,
};
