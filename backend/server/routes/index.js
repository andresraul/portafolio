const express = require('express');
const app = express();

app.use(require('./routes.audiovisual'));
app.use(require('./routes.audiovisual-img'));
app.use(require('./routes.programacion'));
app.use(require('./routes.programacion-img'));
app.use(require('./routes.contacto'));

module.exports = app;