// import dependencies
const {Pool} =require('pg');
require('dotenv').config()
//const helperfunctions = require('../controllers/helperfunctions.js')

// database connection:
const pool = new Pool({
  host: process.env.POSTGRES_HOST,
  user: process.env.POSTGRES_USER ,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD
});

// Create and seed ministry table:
  //helperfunctions.createMinistryTbl(pool);
  //helperfunctions.seedDb(pool);

module.exports = pool;
