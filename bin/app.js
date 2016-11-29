'use strict';

const koa = require('koa'),
      path = require('path'),
      serve = require('koa-static'),
      router = require('../routes/router'),
      Pug = require('koa-pug');

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

//router
app.use(router.routes());

app.listen(8080);