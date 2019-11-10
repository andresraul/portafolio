const Audiovisual = require('../../../models/audiovisual');


const audiovisualCtrlsPut = {};

audiovisualCtrlsPut.updateAudiovisual = async(req, res, next) => {
    const id = req.params.id;

    const obj = { title, body, videoid } = req.body;

    if (!title && !body && !videoid) {
        return res.status(400).json({
            ok: false,
            err: {
                message: 'Denegado.'
            }
        });
    }


    const options = { new: true, runValidators: true, context: 'query' };

    Audiovisual.findByIdAndUpdate(id, obj, options, (err, audiovisualDB) => {

        if (err) {
            return res.status(501).json({
                ok: false,
                err
            });

        }

        if (!audiovisualDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'No se ha encontrado el registro.'
                }
            });
        }

        res.json({
            ok: true,
            audiovisualDB
        });


    });
}



module.exports = audiovisualCtrlsPut;