const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookType:{
        type: 'string',
        required: true,
        enum: {
            values: ["Novel", "Gospel","Studies","Prefer not to say"],
            message: "{value} is not recognized as valid Book Type"
        }
    },
    bookPages:{
        type:'number',
        required: true,
    },
    author:{
        type: 'string',
        required: true,
    },

})


module.exports = mongoose.model('books', bookSchema);