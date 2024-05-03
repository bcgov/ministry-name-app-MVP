// dependecies
const pool = require('../db/dbConnectionConfig.js');
const {fetchData} = require('../utils/helperfunctions.js');
const asyncHandler = require("express-async-handler");
const {
  queryHistory,
  queryHistoryByMinId
} = require("../db/queries.js");
// sql query 

// get all history data
const getHistoryAllApi = (req, res) => {
  pool.query(queryHistory, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

// get direct history data by id
const getHistoryById = (req, res) => {
  const minId = parseInt(req.params.id);
  pool.query(queryHistoryByMinId, [minId], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

// get history data and render to history view
const getHistory = asyncHandler(async (req, res) => {
  try {
    // Call fetchData to retrieve data from the db
    const historicalData = await fetchData(pool, queryHistory);  
    res.render('history', { title: 'Ministry History', 
                            data: historicalData.rows}); 
  } catch (err) {
    console.error('Error fetching historical data:', err);
    res.redirect('/error');
  }
});

    module.exports = {getHistory, getHistoryAllApi, getHistoryById};