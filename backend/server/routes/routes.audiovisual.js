const express = require('express');
const app = express();
const { audiovisualCtrlsPost, audiovisualCtrlsGet, audiovisualCtrlsPut } = require('../controllers/audiovisual/index');

app.get('/audiovisual', [audiovisualCtrlsGet.getAllAudiovisual]);
app.post('/audiovisual', [audiovisualCtrlsPost.createAudiovisualSample]);
app.put('/audiovisual/:id', [audiovisualCtrlsPut.updateAudiovisual]);


module.exports = app