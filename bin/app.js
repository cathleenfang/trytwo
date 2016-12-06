'use strict';

const koa = require('koa'),
      path = require('path'),
      serve = require('koa-static'),
      router = require('../routes/router'),
      Pug = require('koa-pug');
const cssInterceptor = require('./cssInterceptor');
const bodyParser = require('./bodyParser');

const app = koa();

const devPath = path.resolve(__dirname, '../dev');

// view engine
const pug = new Pug({
  viewPath: './dev/pugs',
  basedir: './dev/pugs',
  debug: app.env !== 'production',
  noCache: app.env !== 'production',
  locals: {
    development: app.env === 'development',
    production: app.env === 'production'
  },
  app: app
});

//static
app.use(serve(devPath));

// postcss
app.use(cssInterceptor(devPath));

//router
app.use(router.routes());

app.use(bodyParser);

app.listen(8080);