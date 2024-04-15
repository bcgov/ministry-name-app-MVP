// dependecies
const pool = require('../db/dbConnectionConfig.js');
const {fetchData} = require('../utils/helperfunctions.js');
const asyncHandler = require("express-async-handler");

// sql query 
const queryHistory='Select m.ministry_id, m.ministry_name, m.m_change_effective_date, m.m_change_user, m.is_current, a.acronym, a.a_change_effective_date, mh.ministry_id_history FROM ministry m JOIN ministry_acronym ma ON m.ministry_id = ma.ministry_id JOIN acronym a ON a.acronym_id = ma.acronym_id LEFT JOIN ministry_history mh ON m.ministry_id = mh.ministry_id ORDER BY m.ministry_name asc;';

// get history data and render to history view
const getHistory = asyncHandler(async (req, res) => {
  try {
    // Call fetchData to retrieve data from the db
    const historicalData = await fetchData(pool, queryHistory);  
    res.render('history', { title: 'Ministry History', 
                            data: historicalData.rows}); 
  } catch (err) {
    console.error('Error fetching historical data:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});


    module.exports = {getHistory};