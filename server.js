import app from './app.js';
import http from 'http';
import "dotenv/config.js";
import {normalizePort, onError} from "./controllers/helperfunctions.js";

// get port from .env file and load into expressh
const port = normalizePort(process.env.PORT || '3000');
app.set('port', process.env.PORT);
console.log(process.env.POSTGRES_HOST);

// Create HTTP server.
const server = http.createServer(app);

// Listen on provided port
server.listen(port, ()=> 
  console.log(`App is running on localhost:${port}`)
);
server.on('error', onError);
