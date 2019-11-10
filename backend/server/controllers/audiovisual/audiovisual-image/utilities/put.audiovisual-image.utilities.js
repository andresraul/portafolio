const fs = require('fs');
const path = require('path');
const Audiovisual = require('../../../../../models/audiovisual');



const savingAudiovisualImage = (id, res, imageName) => {

    const obj = {
        img: imageName
    }

    Audiovisual.findByIdAndUpdate(id, obj, (err, audiovisualDB) => {

        if (err) {
            removeImage(imageName);
            return res.status(501).json({
                ok: false,
                err
            });

        }

        if (!audiovisualDB) {
            removeImage(imageName);
            return res.status(500).json({
                ok: false,
                err: {
                    message: 'No existe este registro.'
                }
            });
        }

        let previousImage = audiovisualDB.img;
        audiovisualDB.img = imageName;

        removeImage(previousImage);
        res.json({
            ok: true,
            message: 'Imagen guardada correctamente.'
        });


    });

}


let removeImage = (imageName) => {
    let pathImage = path.resolve(__dirname + `../../../../../../public/images/audiovisual/${imageName}`);

    if (fs.existsSync(pathImage)) {
        fs.unlinkSync(pathImage);
    }
}

module.exports = savingAudiovisualImage;