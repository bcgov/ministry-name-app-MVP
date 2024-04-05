// import dependencies
const {Pool} =require('pg');
require('dotenv').config();

// database connection with env variables:
const pool = new Pool({
  host: process.env.POSTGRES_HOST,
  user: process.env.POSTGRES_USER ,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD
});

module.exports = pool;
