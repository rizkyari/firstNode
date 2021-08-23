const path = require('path');
const rootDir = require('../util/path');
const express = require('express');
const adminData = require('./admin');

const router = express.Router();


router.get('/',(req, res, next) => {
    // console.log(adminData.products);
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    const products = adminData.products;
    res.render('shop', {prods: products, docTitle: 'shop'});
});

module.exports = router;