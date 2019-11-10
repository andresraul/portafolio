const express = require('express');
const app = express();

app.use(require('./routes.audiovisual'));
app.use(require('./routes.audiovisual-img'));

module.exports = app;