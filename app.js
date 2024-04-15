// import dependencies
const express = require('express');
const mountRoutes = require('./routes/indexRouter.js');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const logger = require('morgan');
const createError = require('http-errors');
const path = require('path');
const rateLimit = require('express-rate-limit');

// create expres app
const app= express();

// view engine setu
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// rate limit config - for limiting repeated requests
const limiter = rateLimit({
  windowMs: 10*60*1000, //10 minutes
  max: 100,
  message: "Rate limit of 100 requests in 10 minutes has been exceeded."
});

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(compression());
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(limiter);

// add routes
mountRoutes(app);

// catch 404 and forward to error handler
app.use((req, res, next)=> {
    next(createError(404));
  });
  
  // error handler
  app.use((err, req, res) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    console.error(`Error on request: ${req.method}, url ${req.url}`);
    console.log(err);
    res.status(err.status || 500);
    res.render('error');
  });

module.exports = app;