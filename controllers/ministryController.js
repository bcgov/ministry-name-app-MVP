// dependecies
const pool = require('../db/dbConnectionConfig.js');
const { fetchData } = require('../utils/helperfunctions.js');
const asyncHandler = require("express-async-handler");
const validator = require("express-validator");

// sql query 
const queryMinistry = 'SELECT m.ministry_id, m.ministry_name, a.acronym, m.m_change_effective_date, m.is_current FROM ministry m JOIN ministry_acronym ma ON m.ministry_id = ma.ministry_id JOIN acronym a ON a.acronym_id = ma.acronym_id ORDER BY m.ministry_name ASC;'

// get ministry data and render to index view
const getMinistryData = asyncHandler(async (req, res) => {
  try {
    // Call fetchData to retrieve data from the db
    const theData = await fetchData(pool, queryMinistry);
    res.render('index', { title: 'Ministry Names',
     data: theData.rows}); 
    
  } catch (err) {
    console.error('Error fetching ministry data:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// get ministry data from form and post to DB to create new ministry
const addMinistry = asyncHandler(async (req, res) => {
  try {
    let minName = req.body.ministryName;
    let effectiveDate = req.body.effectiveDate;
    let acronym;
    let acronymDate;

    if (req.body.acronymChoice === "true") {// if yes radio is selected
      acronym = req.body.acronym;
      acronymDate = req.body.acronymDate;
      console.log(`name: ${minName}, date: ${effectiveDate}, acronym: ${acronym}, acronym date: ${acronymDate} `);

    } else {
      console.log(`name: ${minName}, date: ${effectiveDate}`);
    }
    res.redirect('/success');
  } catch (err) {
    console.error('Error creating new Ministry:', err);
    res.redirect('/error');
  }
});




module.exports = { getMinistryData, addMinistry };