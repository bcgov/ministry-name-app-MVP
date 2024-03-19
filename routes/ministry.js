//import express from 'express';
//import {getMinistryData} from '../controllers/queries.js'
//import pool from "../db/index.js";

const express = require('express');
const pool = require('../db/index.js');

const router = express.Router();

//router.get('/', db.getData);

router.get('/', async (req, res) =>{
  const queryAll='SELECT * FROM ministry;';
  try{
    pool.query(queryAll, (error, results) => {
      if (error) {
        return res.render('error', { error });
      }
      //console.log(results);
      const intoJson = JSON.stringify(results);
      console.log(intoJson);

      res.render('index', { title: 'Ministry Names', eventData: intoJson });
      
    });
 
  } catch (err) {
    console.log(err)
    res.sendStatus(500)
  }
 
  
});


//export default router
module.exports = router;