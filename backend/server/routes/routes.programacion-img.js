const express = require('express');
const app = express();

const { imageProgramacionCtrlsPut } = require('../controllers/programacion/programacion-image/index');


app.put('/upload/programacion-img/:id', [imageProgramacionCtrlsPut.catchAndSaveImage]);



module.exports = app;