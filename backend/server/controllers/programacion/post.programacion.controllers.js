const Programacion = require('../../../models/programacion');


const programacionCtrlsPost = {};

programacionCtrlsPost.createProgramacionSample = async(req, res, next) => {
    const { title, body, githuburl } = req.body;

    const date = new Date().getTime();

    const programacion = new Programacion({
        date,
        title,
        body,
        githuburl
    })

    programacion.save()
        .then((programacionDB) => {
            res.json({
                ok: true,
                data: programacionDB
            })
        })
        .catch((err) => {
            return res.status(500).json({
                ok: false,
                err
            })
        });

}

module.exports = programacionCtrlsPost;