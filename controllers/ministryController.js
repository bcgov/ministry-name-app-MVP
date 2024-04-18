// dependecies
const pool = require('../db/dbConnectionConfig.js');
const { fetchData, setIsCurrentFalse } = require('../utils/helperfunctions.js');
const asyncHandler = require("express-async-handler");
//const {body, validationResult} = require("express-validator");

// sql query 
const queryMinistry = 'SELECT m.ministry_id, m.ministry_name,a.acronym_id, a.acronym, m.m_change_effective_date, m.is_current FROM ministry m Left JOIN ministry_acronym ma ON m.ministry_id = ma.ministry_id LEFT JOIN acronym a ON a.acronym_id = ma.acronym_id ORDER BY m.ministry_name ASC;'

// get ministry data from form and post to DB to create new ministry
const addMinistry = asyncHandler(async (req, res) => {
  try {
    //let resultsValidated = validationResult(req);
    // get form data into variables
    let minName = req.body.ministryName.toUpperCase();
    let effectiveDate = req.body.effectiveDate;
    let acronym;
    let acronymDate;
    // query definitions
    let queryAddMinistry = `INSERT INTO ministry (ministry_name, m_change_effective_date, is_current) VALUES ('${minName}', '${effectiveDate}', true);`
   
    if (req.body.acronymChoice === "true") {// if yes radio is selected - add acronym data
        acronym = req.body.acronym.toUpperCase();
        acronymDate = req.body.acronymDate;
        let queryAddAcronym = `INSERT INTO acronym (acronym, a_change_effective_date) VALUES ('${acronym}','${acronymDate}');`
        let queryAddMinistryAcronym = `INSERT INTO ministry_acronym (ministry_id, acronym_id) VALUES ((SELECT ministry_id FROM ministry WHERE UPPER(ministry_name) = UPPER('${minName}')),(SELECT acronym_id FROM acronym WHERE UPPER(acronym) = UPPER('${acronym}')));`
        const addMin = await fetchData(pool, queryAddMinistry);
        const addAcr = await fetchData(pool, queryAddAcronym);
        const addMinAcr = await fetchData(pool, queryAddMinistryAcronym );
        console.log(`${addMin}, ${addAcr}, ${addMinAcr}`);
    }else { 
        const dbResult= await fetchData(pool, queryAddMinistry);
        const obj = JSON.stringify(dbResult);
        console.log(`db result: ${obj}`);
    }
    res.redirect('/success');

  } catch (err) {
    console.error('Error creating new Ministry:', err);
    res.redirect('/error');
  }
});

// TODO add history data to a ministry
const addMinistryHistory = asyncHandler(async (req, res) =>{

});

// TODO: edit ministry data
const editMinistry= asyncHandler(async (req, res) =>{

});

// get ministry data and render to index view
const getMinistryData = asyncHandler(async (req, res) => {
  try {
    // Call fetchData to retrieve data from the db
    const theData = await fetchData(pool, queryMinistry);
    res.render('index', { title: 'Ministry Names',
     data: theData.rows}); 
    
  }catch (err) {
    console.error('Error fetching ministry data:', err);
    res.redirect('/error');
  }
});

// TODO: retire a ministry (set is_current to false)
const retireMinistry= asyncHandler(async (req, res) =>{
  try {
    // Call fetchData to retrieve data from the db
    let minToRetire = req.body.minToRetire;
    console.log(minToRetire);
    let retireResult = await setIsCurrentFalse(pool,minToRetire);
    let final = JSON.stringify(retireResult);
    console.log(`${final}`);
    res.redirect('/success');
  }catch (err) {
    console.error('Error fetching ministry data:', err);
    res.redirect('/error');
  }
});



module.exports = {addMinistry,
                  addMinistryHistory,
                  editMinistry,
                  getMinistryData,
                  retireMinistry
                  };