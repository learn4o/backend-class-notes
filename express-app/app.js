var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.send("<h1>Hi There!</h1>")
});

app.get('/login', function (req, res) {
  res.end(`
        <table>
            <tr>
                <td>Enter details</td>
            </tr>
            <tr>
                <td>User name</td>
                <td><input type="text"/>
            </tr>
            <tr>
                <td>Password</td>
                <td><input type="password"/>
            </tr>
            <tr>
                <td><input type="button" text="Login"/>
            </tr>
        </table>`);
});

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
