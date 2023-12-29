const express = require('express');
const bookRouter = require('./book.routes');

const allRoutes = express();

allRoutes.use('/book', bookRouter);

module.exports =
    allRoutes;
