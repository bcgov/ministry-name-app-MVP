// dependecies
const pool = require("../db/dbConnectionConfig.js");
const {
  queryMinistryAll,
  queryMinistry,
  queryMinistryById,
  queryMinistryExistsCheck,
  queryMinistryExistsCheckById,
  queryRetireMinistry,
  queryAddMinistryHistory,
  queryAddMinistryReturning,
  queryUpdateMinistryName
} = require("../db/queries.js");

// API's for database:

//testing
const getMinistryTEST = (req, res) => {
    pool.query(queryMinistryAll, (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows);
    });
  };
  
  const getMinistry = (req, res) => {
    pool.query(queryMinistry, (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows);
    });
  };
  
  const getMinistryByID = (req, res) => {
    const minId = parseInt(req.params.id);
    pool.query(queryMinistryById, [minId], (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows);
    });
  };
  
  const addMinistryAPI = (req, res) => {
    const { ministry_name, m_change_effective_date, is_current } = req.body;
  
    //check if ministry name alreay exists:
    pool.query(queryMinistryExistsCheck, [ministry_name], (error, results) => {
      if (results.rows.length) {
        res.send("This ministry already exists");
      }
      // add new ministry (without acronym)
      pool.query(
        queryAddMinistryReturning,
        [ministry_name, m_change_effective_date],
        (error, results) => {
          if (error) {
            console.error("Error adding new ministry:", error);
            return res.status(500).send("Internal Server Error");
          }
          const newMinistryID = results.rows[0].ministry_id;
          console.log(newMinistryID);
  
          res.status(201).send({ ministry_id: newMinistryID, message: `${ministry_name} successfully created.` });
        });
    });
  };
  
  const retireMinistryById = (req, res) => {
    const minRetireId = parseInt(req.params.id);
    pool.query(queryMinistryExistsCheckById, [minRetireId], (error, results) => {
      if (!results.rows.length) {
        res.send(`The ministry with id # ${minRetireId} doesn't exist`);
      }
      else {
        pool.query(queryRetireMinistry, [minRetireId], (error, results) => {
          if (error) throw error;
          res.status(200).json(results.rows);
        });
      }
    });
  };
  
  const addMinistryHistory = (req, res) => {
    try {
      const { ministry_id, ministry_id_history } = req.body;
  
      // Perform SQL operation to add ministry history
      pool.query(queryAddMinistryHistory, [ministry_id, ministry_id_history], (error, results) => {
        if (error) {
          console.error("Error adding ministry history:", error);
          return res.status(500).send("Internal Server Error");
        }
  
        res.status(201).send("Ministry history added successfully.");
      });
    } catch (error) {
      console.error("Error adding ministry history:", error);
      res.status(500).send("Internal Server Error");
    }
  };
  
  const editMinistryNameById = (req, res) => {
    try {
      const { ministry_name, ministry_id } = req.body;
      pool.query(
        queryUpdateMinistryName,
        [ministry_name, ministry_id],
        (error, results) => {
          if (error) {
            // Handle query error
            console.error("Error adding new acronym:", error);
            return res.status(500).send("Internal Server Error");
          }
          //res.status(201).send(`Ministry name successfully edited.`);
          res.redirect("/success");
        });
    } catch (err) {
      // Handle synchronous error
      console.error("Synchronous error:", err);
      res.status(500).json(err);
    }
  };

  module.exports = {
    getMinistryTEST,
    addMinistryHistory,
    getMinistry,
    getMinistryByID,
    addMinistryAPI,
    retireMinistryById,
    editMinistryNameById
  };
  