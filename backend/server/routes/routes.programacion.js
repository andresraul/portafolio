const express = require('express');
const app = express();
const { programacionCtrlsPost } = require('../controllers/programacion/index');

app.post('/programacion', [programacionCtrlsPost.createProgramacionSample])

module.exports = app;