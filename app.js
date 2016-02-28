var express = require("express");
var app = express();
var path = require("path");
var server = require("http").createServer(app);


app.use(express.static(path.join(__dirname, 'public')));
app.get('/',function(req, res){
  res.sendFile(__dirname+"/tempalates/index.html");
});
app.get('/dashboard',function(req, res){
  res.sendFile(__dirname+"/dashboard.html");
});
app.get('/club_page',function(req, res){
  res.sendFile(__dirname+"/public/club_page.html");
});

app.get('/manage_page',function(req, res){
  res.sendFile(__dirname+"/public/manage_page.html");

});

app.listen(80, function(){
  console.log("Server listening at...");
});






















// var express = require('express');
// var path = require('path');
// var favicon = require('serve-favicon');
// var logger = require('morgan');
// var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');
//
// var routes = require('./routes/index');
// var users = require('./routes/users');
//
// var app = express();
//
//
// // uncomment after placing your favicon in /public
// //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
//
// app.use('/', routes);
// app.use('/users', users);
//
// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });
//
// // error handlers
//
// // development error handler
// // will print stacktrace
// if (app.get('env') === 'development') {
//   app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('error', {
//       message: err.message,
//       error: err
//     });
//   });
// }
//
// // production error handler
// // no stacktraces leaked to user
// app.use(function(err, req, res, next) {
//   res.status(err.status || 500);
//   res.render('error', {
//     message: err.message,
//     error: {}
//   });
// });
//
//
// module.exports = app;
