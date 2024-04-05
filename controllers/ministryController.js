// dependecies
const pool = require('../db/dbConnectionConfig.js');
const {fetchData} = require('../utils/helperfunctions.js');

// sql query 
const queryMinistry='SELECT m.ministry_id, m.ministry_name, a.acronym, m.m_change_effective_date, m.is_current FROM ministry m JOIN ministry_acronym ma ON m.ministry_id = ma.ministry_id JOIN acronym a ON a.acronym_id = ma.acronym_id ORDER BY m.ministry_name ASC;'

// get ministry data and render to index view
const getMinistryData = async (req, res) => {
  try {
    // Call fetchData to retrieve data from the db
    const theData = await fetchData(pool, queryMinistry);  
    res.render('index', { title: 'Ministry Names', data: theData.rows});
  } catch (err) {
    console.error('Error fetching ministry data:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

    module.exports = {getMinistryData};