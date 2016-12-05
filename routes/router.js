'use strict';

const router = require('koa-router')();

router.get('/', function *() {
    this.render('index');
});

router.get('/full', function *() {
    this.render('full');
});
module.exports = router;