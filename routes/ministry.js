// import dependencies
const express = require('express');
const pool = require('../db/dbConnectionConfig.js');
//const db = require('../controllers/queries.js');


const router = express.Router();

router.get("/", async (req, res) => {
  const queryAll='SELECT * FROM ministry;';
    try {
      const result = await pool.query(queryAll)
      //res.status(200).send({ data: result.rows });
      res.render('index', { title: 'Ministry Names', data: result.rows});
    } catch (err) {
      console.error('Error executing query', err.stack);
      res.status(500).json({error: 'Something went wrong, please try again.' });
    }
  });

        //res.render('index', { title: 'Ministry Names', eventData: results});
 
module.exports = router;