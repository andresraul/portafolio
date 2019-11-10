const path = require('path');

const homeCtrlsGet = {};

homeCtrlsGet.deliverIndex = async(req, res, next) => {


    res.sendFile(path.resolve(__dirname + '../../../../../dist/mi-portafolio/index.html'));


}

module.exports = homeCtrlsGet;