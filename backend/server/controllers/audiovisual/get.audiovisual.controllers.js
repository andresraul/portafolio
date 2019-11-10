const Audiovisual = require('../../../models/audiovisual');


const audiovisualCtrlsGet = {};

audiovisualCtrlsGet.getAllAudiovisual = async(req, res, next) => {

    Audiovisual.find()
        .sort({ date: -1 })
        .exec((err, audiovisualesDB) => {

            if (err) {
                return res.status(501).json({
                    ok: false,
                    err
                });
            }

            if (!audiovisualesDB) {
                return res.status(400).json({
                    ok: false,
                    err: {
                        messaje: 'No existen registros.'
                    }
                });
            }
            res.json({
                ok: true,
                audiovisuales: audiovisualesDB
            });
        })

}

module.exports = audiovisualCtrlsGet;