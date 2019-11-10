const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();

app.use(fileUpload());

const { imageAudiovisualCtrlsPut } = require('../controllers/audiovisual/audiovisual-image/index');

app.put('/upload/audiovisual-img/:id', [imageAudiovisualCtrlsPut.catchAndSaveImage]);


module.exports = app;