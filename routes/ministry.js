// import dependencies
const express = require('express');
const pool = require('../db/dbConnectionConfig.js');
const router = express.Router();

router.get("/", (req, res) => {
  const queryAll='SELECT * FROM ministry;';
    try {
      pool.query(queryAll).then((result) =>{
        res.render('index', { title: 'Ministry Names', data: result.rows});
      })
      //res.status(200).send({ data: result.rows });
      
    } catch (err) {
      console.error('Error executing query', err.stack);
      res.status(500).json({error: 'Something went wrong, please try again.' });
    }
  });

        //res.render('index', { title: 'Ministry Names', eventData: results});
 
module.exports = router;