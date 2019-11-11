const imgExtensionValidator = require('../../../../validators/img-extension.validator');

const savingProgramacionImage = require('./utilities/put.programacion-image.utilities');

const imageProgramacionCtrlsPut = {};


imageProgramacionCtrlsPut.catchAndSaveImage = async(req, res, next) => {

    const id = req.params.id;

    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).json({
            ok: false,
            err: {
                messaje: 'No ha seleccionado ningún archivo.'
            }
        });
    }

    let programacionPhoto = req.files.programacionPhoto;

    const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];
    let validatedExtension = imgExtensionValidator(programacionPhoto.name, allowedExtensions);

    if (!validatedExtension) {
        return res.status(400).json({
            ok: false,
            err: {
                messaje: 'Esta extensión no es permitida. Estas son las únicas extensiones permitidas: ' + allowedExtensions.join(', ')
            }
        })
    }


    let imageCreationDate = new Date().getTime();
    let randomNumber = Math.floor((Math.random() * 10000000000) + 1)
    let imgName = `${imageCreationDate}-${randomNumber}.${validatedExtension}`


    programacionPhoto.mv(`backend/public/images/programacion/${imgName}`, (err) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        savingProgramacionImage(id, res, imgName);
    });



};



module.exports = imageProgramacionCtrlsPut;