// dependecies
const pool = require("../../db/dbConnectionConfig.js");
const { queryHistory, queryHistoryByMinId } = require("../../db/queries.js");

// get all history data
const getHistoryAllApi = (req, res) => {
  pool.query(queryHistory, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

// get direct history data by id
const getHistoryById = (req, res) => {
  const minId = parseInt(req.params.id);
  pool.query(queryHistoryByMinId, [minId], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

module.exports = { getHistoryAllApi, getHistoryById };
