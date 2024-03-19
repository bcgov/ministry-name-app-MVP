//import dependencies
const app = require('./app');
const http = require('http');
const helperfunctions = require('./controllers/helperfunctions.js')
require('dotenv').config({path: '../.env'});

// get port from .env file and load into expressh
const port = helperfunctions.normalizePort(process.env.PORT || '3000');
app.set('port', process.env.PORT);
console.log(process.env.POSTGRES_HOST);

// Create HTTP server.
const server = http.createServer(app);

// Listen on provided port
server.listen(port, ()=> 
  console.log(`App is running on localhost:${port}`)
);
server.on('error', helperfunctions.onError);
