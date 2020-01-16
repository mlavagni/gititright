var express = require('express');
var passport = require('passport');
var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session')
var methodOverride = require('method-override');
// load the env vars
require('dotenv').config();


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var sizesRouter = require('./routes/sizes');
var wishListsRouter = require('./routes/wishLists');
var remindersRouter = require('./routes/reminders');
var allowAccessRouter = require('./routes/allowAccess');
var friendInfosRouter = require('./routes/friendInfos');

var app = express();

var session = require('express-session')

require('./config/database');
require('./config/passport')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(methodOverride('_method'));
// new code below
app.use(session({
  secret: 'SEIRocks!',
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/', usersRouter);
app.use('/', sizesRouter);
app.use('/', wishListsRouter);
app.use('/', remindersRouter);
app.use('/', allowAccessRouter);
app.use('/', friendInfosRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
