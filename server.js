var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
app.set('port', process.env.PORT || 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'build')));

app.use('*', (req, res, next) => {
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(app.get('port'), () => {
	console.log(`Listening on port ${app.get('port')}`);
});

module.exports = app;
