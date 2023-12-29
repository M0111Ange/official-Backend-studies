const express = require('express');
const bookRouter = express.Router();
const bookRoutes = require('../controller/book.controller');


const {list,add} = bookRoutes;

bookRouter.get('/list', list);
bookRouter.post('/add', add);

module.exports =
    bookRouter;