import app from "./app";
import {Client} from 'pg';
import "dotenv/config.js";

const pool = new Client({
    host: process.env.POSTGRES_HOST,
    port: process.env.DB_PORT,
    user: process.env.POSTGRES_USER ,
    passwork: process.env.POSTGRES_PASSWORD ,
    database: process.env.POSTGRES_DB
});

app.use(express.static("public"));

// get request for db data
app.get("/ministries", async (req, res) =>{
    const results = await pool
    .query("SELECT * FROM ministry")
    .then((data)=>{
        return data.rows;
    })
    .catch(()=>{
        throw new Error("query failure");
    })
    res.setHeader("content-type", "application/json");
    res.status(200);
    res.send(JSON.stringify(results));
    console.log(results);
});

// IIFE function for db connection
(async () => {
    await pool.connect();
  
    app.listen(process.env.DB_PORT, () => {
      console.log(`App w/db is running at http://localhost:${process.env.DB_PORT}`);
    });
  })();
  
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("foo");
    }, 300);
    reject("oops");
  });
  
  myPromise.then(() => {
    console.log("hello");
  });




export default pool;