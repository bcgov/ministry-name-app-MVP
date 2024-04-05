// import dependencies
const express = require('express');
const pool = require('../db/dbConnectionConfig.js');
const router = express.Router();

// run select query and send render results to ministry view ejs file to display 
router.get("/", (req, res) => {
  const queryAll='SELECT m.ministry_name, a.acronym, m.m_change_effective_date, m.is_current FROM ministry m JOIN ministry_acronym ma ON m.ministry_id = ma.ministry_id JOIN acronym a ON ma.acronym_id =a.acronym_id ORDER BY ministry_name asc;';
    try {
      pool.query(queryAll).then((result) =>{
        res.render('index', { title: 'Ministry Names', data: result.rows});
      })
      
    } catch (err) {
      console.error('Error executing query', err.stack);
      res.status(500).json({error: 'Something went wrong, please try again.' });
    }
  });

module.exports = router;