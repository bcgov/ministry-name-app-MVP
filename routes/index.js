// import dependencies
const ministry = require('./ministry.js');
const history = require('./history.js');

const mountRoutes = (app) => {
    app.use('/', ministry);
    app.use('/history', history);
  }
   
module.exports = mountRoutes;