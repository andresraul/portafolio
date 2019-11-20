const express = require('express');
const app = express();

const { contactoCtrlsPost } = require('../controllers/contacto/index');

app.post('/contacto', [contactoCtrlsPost.sendEmail]);


module.exports = app;