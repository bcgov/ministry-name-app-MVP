// import dependencies
const ministry = require('./ministry.js');

const mountRoutes = (app) => {
    app.use('/', ministry)
  }
   
module.exports = mountRoutes;