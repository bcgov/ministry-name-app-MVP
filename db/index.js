//import pkg from 'pg';
//import { createMinistryTbl, seedDb} from "../controllers/helperfunctions.js";

const {Pool} =require('pg');
const helperfunctions = require('../controllers/helperfunctions.js')

// database connection:
//const {Pool} = pkg;
const pool = new Pool({
  host: 'postgres',
  user: 'kat' ,
  database: 'name-app-db',
  password: 'mypass'
});

// Create and seed ministry table:
  //helperfunctions.createMinistryTbl(pool);
  //helperfunctions.seedDb(pool);

//export default pool;
module.exports = pool;
