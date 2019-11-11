const fs = require('fs');
const path = require('path');
const Programacion = require('../../../../../models/programacion');



const savingProgramacionImage = (id, res, imageName) => {

    const obj = {
        img: imageName
    }

    Programacion.findByIdAndUpdate(id, obj, (err, programacionDB) => {

        if (err) {
            removeImage(imageName);
            return res.status(501).json({
                ok: false,
                err
            });

        }

        if (!programacionDB) {
            removeImage(imageName);
            return res.status(500).json({
                ok: false,
                err: {
                    message: 'No existe este registro.'
                }
            });
        }

        let previousImage = programacionDB.img;
        programacionDB.img = imageName;

        removeImage(previousImage);
        res.json({
            ok: true,
            message: 'Imagen guardada correctamente.'
        });


    });

}


let removeImage = (imageName) => {
    let pathImage = path.resolve(__dirname + `../../../../../../public/images/programacion/${imageName}`);

    if (fs.existsSync(pathImage)) {
        fs.unlinkSync(pathImage);
    }
}

module.exports = savingProgramacionImage;