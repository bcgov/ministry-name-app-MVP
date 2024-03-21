// import dependencies
const {Pool} =require('pg');
//const helperfunctions = require('../controllers/helperfunctions.js')

// database connection:
const pool = new Pool({
  host: 'postgres',
  user: 'kat' ,
  database: 'name-app-db',
  password: 'mypass'
});

// Create and seed ministry table:
  //helperfunctions.createMinistryTbl(pool);
  //helperfunctions.seedDb(pool);

module.exports = pool;
