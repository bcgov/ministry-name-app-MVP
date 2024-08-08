// dependecies
const pool = require("../../db/dbConnectionConfig.js");
const escape = require('escape-html');
const { queryAcronymsAll,
        queryAddAcronym,
        queryAcronymById,
        queryAcronymIdByMinistryId,
        queryUpdateMinistryAcronym,
        queryAddMinistryAcronym,
        queryUpdateMinistryAcronymHistory,
        queryAcronymExistsCheck, 
    } = require("../../db/queries.js");

  // API's for database:

// get all acronym data
const getAcronymAll = (req, res) => {
    pool.query(queryAcronymsAll, (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows);
    });
  };
  
  // get acronym data by acronym ID
  const getAcronymById = (req, res) => {
    const acrId = parseInt(req.params.id);
    pool.query(queryAcronymById, [acrId], (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows);
    });
  };
  
  // get all acronym data
  const getAcronymIdByMinistryId = (req, res) => {
    const minId = parseInt(req.params.id);
  
    pool.query(queryAcronymIdByMinistryId, [minId], (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows);
    });
  
  };
  
  // add new acronym
  const addNewAcronym = (req, res) => {
    try {
      const { acronymNew, effectiveDateAcronym } = req.body;
      pool.query(queryAcronymExistsCheck, [acronymNew], (error, results) => {
        if (error) {
          // Handle query error
          console.error("Error checking for existing acronym:", error);
          return res.status(500).send("Internal Server Error");
        }
        if (results.rows.length) {
          return res.status(400).send("This acronym already exists");
        } else {
          // add new acronym (without assigning a ministry)
          pool.query(
            queryAddAcronym,
            [acronymNew, effectiveDateAcronym],
            (error, results) => {
              if (error) {
                // Handle query error
                console.error("Error adding new acronym:", error);
                return res.status(500).send("Internal Server Error");
              }
              res.status(201).send(`${escape(acronymNew)} successfully created.`);
            });
        }
      });
    } catch (err) {
      // Handle synchronous error
      console.error("Synchronous error:", err);
      res.status(500).json(err);
    }
  };
  
  // Add to ministry_acronym table
  const addMinistryAcronym = (req, res) => {
    try {
      const { MinToAssign, AcrToAssign } = req.body;
      pool.query(
        queryAddMinistryAcronym,
        [MinToAssign, AcrToAssign],
        (error, results) => {
          if (error) {
            // Handle query error
            console.error("Error adding new acronym:", error);
            return res.status(500).send("Internal Server Error");
          }
          //res.status(201).send(`Acronym and Ministry successfully paired.`);
          res.redirect("/success");
        });
    } catch (err) {
      // Handle synchronous error
      console.error("Synchronous error:", err);
      res.status(500).json(err);
    }
  };
  
  // Reassign acronym to ministry_acronym table
  const updateMinistryAcronym = (req, res) => {
    try {
      const { acronym_id, ministry_id } = req.body;
      pool.query(
        queryUpdateMinistryAcronym,
        [acronym_id, ministry_id],
        (error, results) => {
          if (error) {
            // Handle query error
            console.error("Error adding new acronym:", error);
            return res.status(500).send("Internal Server Error");
          }
          //res.status(201).send(`Ministry Acronym successfully Updated.`);
          res.redirect("/success");
        });
    } catch (err) {
      // Handle synchronous error
      console.error("Synchronous error:", err);
      res.status(500).json(err);
    }
  };
  
  // Update acronym to ministry_history table
  const updateMinistryAcronymHistory = (req, res) => {
    try {
      const { ministry_id, ministry_id_history, acronym_id_history } = req.body;
      pool.query(
        queryUpdateMinistryAcronymHistory,
        [ministry_id, ministry_id_history, acronym_id_history],
        (error, results) => {
          if (error) {
            // Handle query error
            console.error("Error adding new acronym:", error);
            return res.status(500).send("Internal Server Error");
          }
          //res.status(201).send(`Ministry Acronym History successfully added.`);
          res.redirect("/success");
        });
    } catch (err) {
      // Handle synchronous error
      console.error("Synchronous error:", err);
      res.status(500).json(err);
    }
  };

module.exports = {
    getAcronymAll,
    addNewAcronym,
    addMinistryAcronym,
    updateMinistryAcronym,
    updateMinistryAcronymHistory,
    getAcronymById,
    getAcronymIdByMinistryId
  };
  