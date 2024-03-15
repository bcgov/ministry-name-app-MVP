import pkg from 'pg';
import { createMinistryTbl, seedDb} from "../controllers/helperfunctions.js";

// database connection:
const {Pool} = pkg;
const pool = new Pool({
  host: 'postgres',
  user: 'kat' ,
  database: 'name-app-db',
  password: 'mypass'
});

// Create and seed ministry table:
  console.log("hit pool doc");
  createMinistryTbl(pool);
  seedDb(pool);

export default pool;