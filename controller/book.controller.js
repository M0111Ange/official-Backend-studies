const bookModel = require('../models/book.model');

const list = async (req, res, next) => {
    try {
        var allBooks = await bookModel.find({});
        res.status(200).json({
            books: allBooks
        });
    } catch (error) {
        res.status(500).send(error);
    }
}
const add= async (req, res, next) => {
    try {
        console.log(req.body);
        var addedBook = await bookModel.add(req.body);
        res.status(201).json({
            message:"book addes successfully",
            books: addedBook
        })
    } catch (error) {
    console.log(error);
    res.status(500).send(error);
}
}
module.exports={
    list,add
}