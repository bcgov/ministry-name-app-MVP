import '../db';

const getData =(req, res) => {
    pool.query('SELECT * FROM ministry', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows);
    })
  };

  module.exports ={
    getData
  }