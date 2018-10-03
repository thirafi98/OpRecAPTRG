var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//var ref = new Firebase("https://aptrgrecruitment.firebaseio.com/");
// See https://console.firebase.google.com/u/0/project/aptrgrecruitment/settings/serviceaccounts/adminsdk for how to
// auto-generate this config
// var admin = require("firebase-admin");

// var serviceAccount = require("./aptrgrecruitment.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://aptrgrecruitment.firebaseio.com"
// });

// Debug
// var db = require('./config/firebase.js');

// var getPeserta = db.database().ref('Peserta/');
// getPeserta.on('value', function(snapshot) {
//   console.log(snapshot.val());
// });


var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/scripts', express.static(__dirname + '/node_modules/')); //untuk nambah script ke node_modules


app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
