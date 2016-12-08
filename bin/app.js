'use strict';

const koa = require('koa'),
      path = require('path'),
      serve = require('koa-static'),
      router = require('../routes/router'),
      Pug = require('koa-pug');
const cssInterceptor = require('./cssInterceptor');
const bodyParser = require('./bodyParser');
const webpack = require('webpack');
const webpackMiddleware = require('koa-webpack-dev-middleware');
const webpackConfig = require('../webpack.config');

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

// js(webpack)
app.use(webpackMiddleware(webpack(webpackConfig), {
    publicPath: '/script/',
    stats: {
        colors: true
    }
}));

app.listen(8080);