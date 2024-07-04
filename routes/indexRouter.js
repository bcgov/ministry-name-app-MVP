// import dependencies
var cache = require('express-cache-ctrl');
// import router file dependencies
const ministry = require('./ministryRouter.js');
const history = require('./historyRouter.js');
const success = require('./successRouter.js');
const error = require('./errorRouter.js');
const acronym = require('./acronymRouter.js');
const apiAcronym = require('./apiAcronymRouter.js');
const apiMinistry = require('./apiMinistryRouter.js');
const apiHistory = require('./apiHistoryRouter.js');

const mountRoutes = (app) => {
  app.use('/', cache.secure(), ministry);
  app.use('/history', cache.secure(), history);
  app.use('/success', cache.public(), success);
  app.use('/error',cache.secure(), error);
  app.use('/acronym',cache.secure(), acronym);
  app.use('/api/acronym',cache.secure(), apiAcronym);
  app.use('/api/ministry',cache.secure(), apiMinistry);
  app.use('/api/history',cache.secure(), apiHistory);
}

module.exports = mountRoutes;