//import dependencies
import express from 'express';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import morgan from 'morgan';
import mountRoutes from './routes/index.js';
import path from 'path';
import pool from './db/index.js';
import { fileURLToPath } from 'url';

import { createMinistryTbl, seedDb } from './controllers/helperfunctions.js';

//create expres app
const app= express();

// view engine setup
const __filename = fileURLToPath(import.meta.url);
const __dirname =path.dirname(__filename);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(compression());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));


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

// Create and seed ministry table:
//createMinistryTbl(pool);
//seedDb(pool);
//export
export default app;