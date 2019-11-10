const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let audiovisualSchema = new Schema({
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
    img: {
        type: String,
        required: false
    },
    videoid: {
        type: Number,
        required: [true, 'El id del video es obligatorio.']
    }
});

module.exports = mongoose.model('Audiovisual', audiovisualSchema);