// dependecies
const pool = require("../../db/dbConnectionConfig.js");
const { fetchData } = require("../../utils/helperfunctions.js");
const asyncHandler = require("express-async-handler");
const { queryHistory } = require("../../db/queries.js");

// get history data and render to history view
const getHistory = asyncHandler(async (req, res) => {
  try {
    // Call fetchData to retrieve data from the db
    const historicalData = await fetchData(pool, queryHistory);
    res.render("history", {
      title: "Ministry History",
      data: historicalData.rows,
    });
  } catch (err) {
    console.error("Error fetching historical data:", err);
    res.redirect("/error");
  }
});

module.exports = { getHistory };
