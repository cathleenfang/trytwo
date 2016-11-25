'use strict';

const router = require('koa-router')();

router.get('/', function *() {
    this.render('index');
});

module.exports = router;