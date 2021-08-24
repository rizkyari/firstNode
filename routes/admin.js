const path = require('path');
const rootDir = require('../util/path');
const express = require('express');

const router = express.Router();

const products = [];

router.get('/add',(req, res, next) => {
    // res.sendFile(path.join(rootDir, 'views', 'add.html'));
    res.render('add',{path:'/admin/add',docTitle: 'add'});
});

router.post('/add',(req, res, next) => {
    products.push({title: req.body.title});
    res.redirect('/');
});

exports.routes = router;
exports.products = products;