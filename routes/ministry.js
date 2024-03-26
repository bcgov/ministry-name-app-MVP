// import dependencies
const express = require('express');
const pool = require('../db/dbConnectionConfig.js');
const router = express.Router();

router.get("/", (req, res) => {
  const queryAll='SELECT * FROM ministry ORDER BY ministry_name asc;';
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