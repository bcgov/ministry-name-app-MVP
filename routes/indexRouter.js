// import dependencies
const ministry = require('./ministryRouter.js');
const history = require('./historyRouter.js');

const mountRoutes = (app) => {
    app.use('/', ministry);
    app.use('/history', history);
  }
   
module.exports = mountRoutes;