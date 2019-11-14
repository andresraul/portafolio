const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let programacionSchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    title: {
        type: String,
        required: [true, 'El título es obligatorio.']
    },
    body: {
        type: String,
        required: [true, 'El texto principal el obligatorio.']
    },
    githuburl: {
        type: String,
        required: false
    },
    img: {
        type: String,
        required: false
    },
    imgArray: {
        type: [String],
        required: false
    }
});


module.exports = mongoose.model('Programacion', programacionSchema);