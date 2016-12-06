'use strict';

const router = require('koa-router')();

router.get('/index', function *() {
    this.render('index');
});

router.get('/full', function *() {
    this.render('full');
});

router.get('/lifestyle', function *() {
    this.render('lifestyle');
});

module.exports = router;