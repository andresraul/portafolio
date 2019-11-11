const Audiovisual = require('../../../models/audiovisual');


const audiovisualCtrlsPost = {};

audiovisualCtrlsPost.createAudiovisualSample = async(req, res, next) => {
    const { title, body, videoid } = req.body;

    const date = new Date().getTime();

    const audiovisual = new Audiovisual({
        date,
        title,
        body,
        videoid
    })

    audiovisual.save()
        .then((audiovisualDB) => {
            res.json({
                ok: true,
                data: audiovisualDB
            })
        })
        .catch((err) => {
            return res.status(500).json({
                ok: false,
                err
            })
        });

}

module.exports = audiovisualCtrlsPost;