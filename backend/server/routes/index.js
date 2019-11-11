const express = require('express');
const app = express();

app.use(require('./routes.audiovisual'));
app.use(require('./routes.audiovisual-img'));
app.use(require('./routes.programacion'));

module.exports = app;