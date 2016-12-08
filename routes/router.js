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

router.get('/photodiary', function *() {
    this.render('photodiary');
});

router.get('/music', function *() {
    this.render('music');
});

router.get('/travel', function *() {
    this.render('travel');
});

module.exports = router;