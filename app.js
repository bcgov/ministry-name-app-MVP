// import dependencies
const express = require('express');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const logger = require('morgan');
const createError = require('http-errors');
const path = require('path');
const mountRoutes = require('./routes/indexRouter.js');
const bodyParser = require('body-parser');
const rateLimit = require('express-rate-limit')

// create expres app
const app= express();

// view engine setu
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// rate limit config - for limiting repeated requests
const limiter = rateLimit();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(compression());
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true,}));
app.use(limiter);



// add routes
mountRoutes(app);

// catch 404 and forward to error handler
app.use((req, res, next)=> {
    next(createError(404));
  });
  
  // error handler
  app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });

module.exports = app;