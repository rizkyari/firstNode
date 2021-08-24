const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const rootDir = require('./util/path');
const app = express();

app.set('view engine', 'pug');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public',)));

app.use('/admin',adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    // res.status(404).sendFile(path.join(rootDir, "views", "not-found.html"))
    res.render('not-found');
});

app.listen(3000);