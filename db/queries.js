// for testing sql queries 
const queryMinistryAll = 'Select * from ministry;';

// Acronym table sql queries
const queryAcronymsAllTEST = 'SELECT m.ministry_id, m.ministry_name, a.acronym_id, a.acronym, a.a_change_effective_date, m.is_current FROM ministry m JOIN ministry_acronym ma ON m.ministry_id = ma.ministry_id Right JOIN acronym a ON a.acronym_id = ma.acronym_id ORDER BY a.acronym ASC;';
const queryAcronymsAll = 'SELECT m.ministry_id, m.ministry_name, a.acronym_id, a.acronym, a.a_change_effective_date, m.is_current FROM ministry m fULL OUTER JOIN ministry_acronym ma ON m.ministry_id = ma.ministry_id fULL OUTER JOIN acronym a ON a.acronym_id = ma.acronym_id ORDER BY a.acronym ASC;';
const queryAcronymById = 'SELECT m.ministry_id, m.ministry_name,a.acronym_id, a.acronym, a.a_change_effective_date, m.is_current FROM ministry m RIGHT JOIN ministry_acronym ma ON m.ministry_id = ma.ministry_id RIGHT JOIN acronym a ON a.acronym_id = ma.acronym_id WHERE a.acronym_id =$1;';
const queryAcronymExistsCheck = 'SELECT a from acronym a WHERE UPPER(a.acronym) = UPPER($1);';
const queryAddAcronym = 'INSERT INTO acronym (acronym, a_change_effective_date) VALUES($1, $2);';
const queryAddMinistryAcronym= 'INSERT INTO ministry_acronym (ministry_id, acronym_id) VALUES($1, $2);';
// ministry table sql queries 
const queryMinistry = 'SELECT m.ministry_id, m.ministry_name, a.acronym_id, a.acronym, m.m_change_effective_date, m.is_current FROM ministry m Left JOIN ministry_acronym ma ON m.ministry_id = ma.ministry_id LEFT JOIN acronym a ON a.acronym_id = ma.acronym_id ORDER BY m.ministry_name ASC;';
const queryMinistryById = 'SELECT m.ministry_id, m.ministry_name,a.acronym_id, a.acronym, m.m_change_effective_date, m.is_current FROM ministry m Left JOIN ministry_acronym ma ON m.ministry_id = ma.ministry_id LEFT JOIN acronym a ON a.acronym_id = ma.acronym_id WHERE m.ministry_id =$1;';
const queryMinistryExistsCheck = 'SELECT m from ministry m WHERE UPPER(m.ministry_name) = UPPER($1);';
const queryAddMinistry = 'INSERT INTO ministry (ministry_name, m_change_effective_date, is_current)  VALUES($1, $2, true);';
const queryAddMinistryReturning = 'INSERT INTO ministry (ministry_name, m_change_effective_date, is_current)  VALUES($1, $2, true) RETURNING ministry_id;';
const queryRetireMinistry = 'UPDATE ministry SET is_current = false WHERE ministry_id = $1;';
const queryEditMinistry = '';
const queryMinistryExistsCheckById = 'SELECT m from ministry m WHERE ministry_id = $1;';
const queryAddMinistryHistory = 'INSERT INTO ministry_history (ministry_id, ministry_id_history) VALUES($1, $2);';


module.exports = {
  queryAddAcronym,
  queryAcronymById,
  queryAcronymExistsCheck,
  queryAcronymsAllTEST,
  queryAcronymsAll,
  queryMinistryAll,
  queryAddMinistry,
  queryMinistry,
  queryMinistryById,
  queryMinistryExistsCheck,
  queryMinistryExistsCheckById,
  queryRetireMinistry,
  queryEditMinistry,
  queryAddMinistryHistory,
  queryAddMinistryReturning,
  queryAddMinistryAcronym
};