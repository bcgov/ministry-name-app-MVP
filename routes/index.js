import ministry from './ministry.js';

const mountRoutes = (app) => {
    app.use('/', ministry)
  }
   
  export default mountRoutes