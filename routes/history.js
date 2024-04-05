// import dependencies
const express = require('express');
const pool = require('../db/dbConnectionConfig.js');
const router = express.Router();

// run select query and send render results to history view ejs file to display 
router.get("/", (req, res) => {
  //const queryHist='SELECT m.ministry_id, m.ministry_name, a.acronym, m.m_change_effective_date, mh.ministry_id_history FROM ministry m JOIN ministry_acronym ma ON m.ministry_id = ma.ministry_id JOIN acronym a ON ma.acronym_id =a.acronym_id LEFT JOIN ministry_history mh ON m.ministry_id= mh.ministry_id WHERE m.is_current = true ORDER BY m.ministry_name asc;';
    const queryHist = 'WITH RECURSIVE thehistory AS (SELECT ministry_id, ministry_id_history, acronym_id_history FROM ministry_history WHERE ministry_id_history is NULL UNION all SELECT * FROM ministry_history WHERE ministry_id_history = ministry_id) SELECT * FROM thehistory;';
  try {
      pool.query(queryHist).then((result) =>{
        res.render('history', { title: 'Ministry History', data: result.rows});
      })
      
    } catch (err) {
      console.error('Error executing query', err.stack);
      res.status(500).json({error: 'Something went wrong with the history page, please try again.' });
    }
  });

module.exports = router;