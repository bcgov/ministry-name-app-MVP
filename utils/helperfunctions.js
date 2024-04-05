

  // test function
  const testing = ()=>{
      console.log('export function working')
  };

  
  /**
   * fetch db data based on provided sql query
   * @param {Pool} pool db connection pool
   * @param {String} sqlQuery the sql query
   * @returns {Promise<sqlQueryResults>} query results 
   * @throws {Error} Error if query fails
   */
  const fetchData = async (pool, sqlQuery) =>{
    // get client from db pool
    const client = await pool.connect(); 
    try{
        const result = await client.query(sqlQuery);
        return result;
    }catch (err){
        console.error('Error executing fetchData()', err.stack);
        res.status(500).json({error: 'Something went wrong, please try again.' });
    }finally{
      client.release();
    }
  };


  /**
   * Normalize port value to a number, string, or false
   * @param {number | string} portValue port value to be normalized
   * @returns {number | string | false } the normalized port value or false
   */
  const normalizePort = (portValue) =>{
      const testPort = parseInt(portValue, 10);
      if (isNaN(testPort)) {
        // named pipe
        return portValue;
      }
      if (testPort >= 0) {
        // port number
        return testPort;
      }
      return false;
    };


  /**
   * Event listener for HTTP server "error" event
   * @param {Error} error error from server
   * @throws {Error} if the error is not a server listening error
   */
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