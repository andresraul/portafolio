const Programacion = require('../../../models/programacion');


const programacionCtrlsGet = {};

programacionCtrlsGet.getAllProgramacion = async(req, res, next) => {

    Programacion.find()
        .sort({ date: -1 })
        .exec((err, programacionDB) => {

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
                        messaje: 'No existen registros.'
                    }
                });
            }
            res.json({
                ok: true,
                programacion: programacionDB
            });
        })

}

module.exports = programacionCtrlsGet;