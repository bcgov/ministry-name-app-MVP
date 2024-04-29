// dependecies
const pool = require("../db/dbConnectionConfig.js");
const {
  fetchData,
  setIsCurrentFalse,
  updateHistory,
} = require("../utils/helperfunctions.js");
const asyncHandler = require("express-async-handler");
//const {body, validationResult} = require("express-validator");
const {
  queryMinistryAll,
  queryMinistry,
  queryMinistryById,
  queryMinistryExistsCheck,
  queryMinistryExistsCheckById,
  queryAddMinistry,
  queryRetireMinistry,
  queryEditMinistry,
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
      queryAddMinistry,
      [ministry_name, m_change_effective_date],
      (error, results) => {
        if (error) throw error;
        res.status(201).send(`${ministry_name} successfully created.`);
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

const editMinistryById = (req, res) => { };

const addMinistry = asyncHandler(async (req, res) => {
  try {
    //let resultsValidated = validationResult(req);
    // get form data into variables
    let minName = req.body.ministryName.toUpperCase();
    let effectiveDate = req.body.effectiveDate;
    let acronym;
    let acronymDate;
    // query definitions
    let queryAddMinistry = `INSERT INTO ministry (ministry_name, m_change_effective_date, is_current) VALUES ('${minName}', '${effectiveDate}', true);`;

    if (req.body.acronymChoice === "true") {
      // if yes radio is selected - add acronym data
      acronym = req.body.acronym.toUpperCase();
      acronymDate = req.body.acronymDate;
      let queryAddAcronym = `INSERT INTO acronym (acronym, a_change_effective_date) VALUES ('${acronym}','${acronymDate}');`;
      let queryAddMinistryAcronym = `INSERT INTO ministry_acronym (ministry_id, acronym_id) VALUES ((SELECT ministry_id FROM ministry WHERE UPPER(ministry_name) = UPPER('${minName}')),(SELECT acronym_id FROM acronym WHERE UPPER(acronym) = UPPER('${acronym}')));`;
      const addMin = await fetchData(pool, queryAddMinistry);
      const addAcr = await fetchData(pool, queryAddAcronym);
      const addMinAcr = await fetchData(pool, queryAddMinistryAcronym);
      console.log(`${addMin}, ${addAcr}, ${addMinAcr}`);
    } else {
      const dbResult = await fetchData(pool, queryAddMinistry);
      const obj = JSON.stringify(dbResult);
      console.log(`db result: ${obj}`);
    }
    res.redirect("/success");
  } catch (err) {
    console.error("Error creating new Ministry:", err);
    res.redirect("/error");
  }
});

// TODO add history data to a ministry
const addMinistryHistory = asyncHandler(async (req, res) => {
  let minIdHistory = "";
  let minIdCurrent = "";
  try {
    const historyUpdated = await updateHistory(
      pool,
      minIdCurrent,
      minIdHistory
    );
  } catch (err) {
    console.error("Error adding history data to ministry_history table:", err);
    res.redirect("/error");
  }
});

// TODO: edit ministry data
const editMinistry = asyncHandler(async (req, res) => {
  try {
  } catch (err) {
    console.error("Error editing a history:", err);
    res.redirect("/error");
  }
});

// get ministry data and render to index view
const getMinistryData = asyncHandler(async (req, res) => {
  try {
    // Call fetchData to retrieve data from the db
    const theData = await fetchData(pool, queryMinistry);
    res.render("index", { title: "Ministry Names", data: theData.rows });
  } catch (err) {
    console.error("Error fetching ministry data:", err);
    res.redirect("/error");
  }
});

// TODO: merge 2 ministries
const mergeMinistry = asyncHandler(async (req, res) => {
  try {
  } catch (err) {
    console.error("Error editing a history:", err);
    res.redirect("/error");
  }
});

// retire a ministry (set is_current to false)
const retireMinistry = asyncHandler(async (req, res) => {
  try {
    // Call fetchData to retrieve data from the db
    let minToRetire = req.body.minToRetire;
    console.log(`min id to retire: ${minToRetire}`);
    let retireResult = await setIsCurrentFalse(pool, minToRetire);
    let final = JSON.stringify(retireResult);
    console.log(`${final}`);
    res.redirect("/success");
  } catch (err) {
    console.error("Error retiring this ministry:", err);
    res.redirect("/error");
  }
});

// TODO: split a ministry into 2 new ones and retire original
const splitMinistry = asyncHandler(async (req, res) => {
  try {
    // request form data:
    let minIdToSplit = req.body.minToSplit;
    let newMinA = req.body.splitMinistryNameA;
    let effectiveDateA = req.body.splitEffectiveDateA;
    let newMinB = req.body.splitMinistryNameB;
    let effectiveDateB = req.body.splitEffectiveDateB;
    console.log(
      `${minIdToSplit}, ${newMinA}, ${effectiveDateA}, ${newMinB}, ${effectiveDateB},`
    );
    // add 2 new ministries
    let queryAddSplitMinistries = `INSERT INTO ministry (ministry_name, m_change_effective_date, is_current) VALUES ('${newMinA}', '${effectiveDateA}', true),('${newMinB}', '${effectiveDateB}', true);`;
    console.log(`${queryAddSplitMinistries}`);
    let insertSplitMinistriesResult = await fetchData(
      pool,
      queryAddSplitMinistries
    );
    // fetch new ministry IDs:
    let queryNewIds = `SELECT m.ministry_id , m.ministry_name, m.is_current from ministry m WHERE UPPER(m.ministry_name) = UPPER('${newMinA}') OR UPPER(m.ministry_name) = UPPER('${newMinB}') ;`;
    console.log(`${queryNewIds}`);
    let updateSplitHistoryResult = await fetchData(pool, queryNewIds);
    //console.log(`${updateSplitHistoryResult.rows}`);

    const objx = JSON.stringify(updateSplitHistoryResult.rows);
    console.log(`db result: ${objx}`);
  } catch (err) {
    console.error("Error editing a history:", err);
    res.redirect("/error");
  }
});

module.exports = {
  getMinistryTEST,
  addMinistry,
  addMinistryHistory,
  editMinistry,
  getMinistry,
  getMinistryByID,
  addMinistryAPI,
  retireMinistryById,
  editMinistryById,
  getMinistryData,
  mergeMinistry,
  retireMinistry,
  splitMinistry,
};
