import app from './app.js';
import http from 'http';

const port = normalizePort(process.env.PORT || '3000');
app.set('port', process.env.PORT);


// Create HTTP server.
const server = http.createServer(app);

// Listen on provided port, on all network interfaces.
 server.listen(port, ()=> 
  console.log(`App is running on localhost:${port}`)
);
server.on('error', onError);


// Normalize a port into a number, string, or false.
function normalizePort(val) {
  const testPort = parseInt(val, 10);
  if (isNaN(testPort)) {
    // named pipe
    return val;
  }
  if (testPort >= 0) {
    // port number
    return testPort;
  }
  return false;
}


// Event listener for HTTP server "error" event.
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;
  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}
