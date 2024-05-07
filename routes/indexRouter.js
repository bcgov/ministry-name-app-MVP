// import dependencies
const ministry = require('./ministryRouter.js');
const history = require('./historyRouter.js');
const success = require('./successRouter.js');
const error = require('./errorRouter.js');
const acronym = require('./acronymRouter.js');
const apiAcronym = require('./apiAcronymRouter.js');
const apiMinistry = require('./apiMinistryRouter.js');
const apiHistory = require('./apiHistoryRouter.js');

const mountRoutes = (app) => {
  app.use('/', ministry);
  app.use('/history', history);
  app.use('/success', success);
  app.use('/error', error);
  app.use('/acronym', acronym);
  app.use('/acronym/api', apiAcronym);
  app.use('/api/ministry', apiMinistry);
  app.use('/api/history', apiHistory);
}

module.exports = mountRoutes;