const express = require('express');
const app = express();
const { programacionCtrlsPost, programacionCtrlsPut, programacionCtrlsGet } = require('../controllers/programacion/index');

app.post('/programacion', [programacionCtrlsPost.createProgramacionSample]);
app.put('/programacion/:id', [programacionCtrlsPut.updateProgramacion]);
app.get('/programacion', [programacionCtrlsGet.getAllProgramacion]);



module.exports = app;