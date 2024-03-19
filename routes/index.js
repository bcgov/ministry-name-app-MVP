//import ministry from './ministry.js';
const ministry = require('./ministry.js');


const mountRoutes = (app) => {
    app.use('/', ministry)
  }
   
  //export default mountRoutes
  module.exports = mountRoutes;