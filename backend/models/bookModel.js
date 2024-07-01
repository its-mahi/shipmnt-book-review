const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    book_id: { 
        type: String, 
        required: true, 
        unique: true 
    },
    
    title: { 
        type: String, 
        required: true 
    },
    
    author: { 
        type: String, 
        required: true 
    },
    
    description: { 
        type: String 
    },
});

module.exports = mongoose.model('Book', bookSchema);

