var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var expressLayouts = require('express-ejs-layouts');
var timeout = require('connect-timeout');
var session = require('express-session');
var RedisStore = require('connect-redis')(session);
var compression = require('compression');

// 路由和配置模块
var index = require('./routes/index');
var pages = require('./routes/pages');
var config = require('./config');

var app = express();

// view engine setup
app.engine('.html', require('ejs').__express);
app.set('layout', 'layout');	//default layout.html
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.use(expressLayouts);

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(timeout('60s'));
app.use(compression());

// 配置路由
app.use('/', index);
app.use('/', pages);

// ?????
app.use(session({
    secret: config.session_secret,
    name: 'sessionID_bzsx',
    store: new RedisStore({
        port: config.redis_port,
        host: config.redis_host,
        db: 1,
        pass: config.redis_password,
        ttl: 60 * 60 * 24 * 7
    }),
    cookie: {
        maxAge: 60 * 60 * 24 * 7 * 1000
    },
    resave: false,
    saveUninitialized: false,
}));

//项目根目录
global.ROOT_PATH = process.cwd();

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
