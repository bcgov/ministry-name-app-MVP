

  // test function
  const testing = ()=>{
      console.log('export function working')
  };

  // fetch data for functionality, pass db connection pool and sql query
  const fetchData = async (pool, sqlQuery) =>{
    try{
        const Result = await pool.query(sqlQuery);
        return Result;
    }catch (err){
        console.error('Error executing fetchData()', err.stack);
        res.status(500).json({error: 'Something went wrong, please try again.' });
    }
  };

  // Normalize port to a number, string, or false.
  const normalizePort = (val) =>{
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
    };

  // Event listener for HTTP server "error" event.
  const onError = (error) => {
      if (error.syscall !== 'listen') {
        throw error;
      }
      const bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

      // handle specific listen errors with meaningfull messages

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
    };


module.exports ={
  fetchData,
  normalizePort,
  onError,
 
  testing
};