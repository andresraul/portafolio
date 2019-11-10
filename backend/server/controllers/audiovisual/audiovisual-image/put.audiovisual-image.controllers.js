const Audiovisual = require('../../../../models/audiovisual');
const imgExtensionValidator = require('../../../../validators/img-extension.validator');

const savingAudiovisualImage = require('./utilities/put.audiovisual-image.utilities');

const imageAudiovisualCtrlsPut = {};


imageAudiovisualCtrlsPut.catchAndSaveImage = async(req, res, next) => {

    const id = req.params.id;

    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).json({
            ok: false,
            err: {
                messaje: 'No ha seleccionado ningún archivo.'
            }
        });
    }

    let audiovisualPhoto = req.files.audiovisualPhoto;

    const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];
    let validatedExtension = imgExtensionValidator(audiovisualPhoto.name, allowedExtensions);

    if (!validatedExtension) {
        return res.status(400).json({
            ok: false,
            err: {
                messaje: 'Esta extensión no es permitidas. Estas son las únicas extensiones permitidas: ' + allowedExtensions.join(', ')
            }
        })
    }


    let imageCreationDate = new Date().getTime();
    let randomNumber = Math.floor((Math.random() * 10000000000) + 1)
    let imgName = `${imageCreationDate}-${randomNumber}.${validatedExtension}`


    audiovisualPhoto.mv(`backend/public/images/audiovisual/${imgName}`, (err) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        savingAudiovisualImage(id, res, imgName);
    });



};



module.exports = imageAudiovisualCtrlsPut;