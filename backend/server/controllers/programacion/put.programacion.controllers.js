const Programacion = require('../../../models/programacion');


const programacionCtrlsPut = {};

programacionCtrlsPut.updateProgramacion = async(req, res, next) => {
    const id = req.params.id;

    const obj = { title, body, githuburl } = req.body;

    if (!title && !body && !githuburl) {
        return res.status(400).json({
            ok: false,
            err: {
                message: 'Denegado.'
            }
        });
    }


    const options = { new: true, runValidators: true, context: 'query' };

    Programacion.findByIdAndUpdate(id, obj, options, (err, programacionDB) => {

        if (err) {
            return res.status(501).json({
                ok: false,
                err
            });

        }

        if (!programacionDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'No se ha encontrado el registro.'
                }
            });
        }

        res.json({
            ok: true,
            programacionDB
        });


    });
}



module.exports = programacionCtrlsPut;