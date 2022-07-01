const express = require('express');
const app = express();
const mongoose = require('mongoose');
var cors = require("cors");

const UserController = require('./UserController');
const ProductController = require('./ProductController');
const ShopController = require('./ShopController');
const ReportController = require('./ReportController');
const CategoryController = require('./CategoryController');

app.listen(8080,()=>console.log('listening on port 8080'));
app.use(cors());
app.use('/api/users', UserController);
app.use('/api/products',ProductController);
app.use('/api/shops',ShopController);
app.use('/api/reports',ReportController);
app.use('/api/categories',CategoryController);

mongoose.connect(
    'mongodb://localhost:27017/',
    {
      dbName: "torob_db",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => (err ? console.log(err) : console.log("Connected to mongoDb"))
);


  