// import dependencies
const ministry = require('./ministryRouter.js');
const history = require('./historyRouter.js');
const success = require('./successRouter.js');
const error = require('./errorRouter.js');
const acronym = require('./acronymRouter.js');

const mountRoutes = (app) => {
    app.use('/', ministry);
    app.use('/history', history);
    app.use('/success', success);
    app.use('/error', error);
    app.use('/acronym', acronym );
  }
   
module.exports = mountRoutes;