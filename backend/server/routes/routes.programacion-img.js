const express = require('express');
const app = express();

const { imageProgramacionCtrlsPut, imageArrayProgramacionCtrlsPost } = require('../controllers/programacion/programacion-image/index');


app.put('/upload/programacion-img/:id', [imageProgramacionCtrlsPut.catchAndSaveImage]);
app.put('/upload/programacion-img-arr/:id', [imageArrayProgramacionCtrlsPost.catchAndSaveImages]);




module.exports = app;