const Programacion = require('../../../models/programacion');


const programacionCtrlsGet = {};

programacionCtrlsGet.getAllProgramacion = async(req, res, next) => {

    Programacion.find()
        .sort({ date: -1 })
        .exec((err, programacionDB) => {

            if (err) {
                return res.status(500).json({
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

programacionCtrlsGet.getProgramacionById = async(req, res, next) => {
    const id = req.params.id;

    Programacion.findById(id, (err, programacionDB) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if (!programacionDB) {
            res.status(400).json({
                ok: false,
                err: {
                    messaje: 'Registro no encontrado.'
                }
            });
        }

        res.json({
            ok: true,
            data: programacionDB
        });
    });
}

module.exports = programacionCtrlsGet;