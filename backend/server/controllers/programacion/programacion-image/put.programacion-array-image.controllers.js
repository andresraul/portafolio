const Programacion = require('../../../../models/programacion');
const fs = require('fs');
const path = require('path');
const imgExtensionValidator = require('../../../../validators/img-extension.validator');

const imageArrayProgramacionCtrlsPost = {};


imageArrayProgramacionCtrlsPost.catchAndSaveImages = async(req, res, next) => {

    const id = req.params.id;

    if (!req.files || req.files.length === 0) {
        return res.status(400).json({
            ok: false,
            err: {
                messaje: 'No ha seleccionado ningún archivo.'
            }
        });
    }

    let programacionArrayPhoto = req.files.programacionArrayPhoto;
    let imgArray = [];

    for (let i = 0; i < programacionArrayPhoto.length; i++) {

        const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];
        let validatedExtension = imgExtensionValidator(programacionArrayPhoto[i].name, allowedExtensions);

        if (!validatedExtension) {
            await removeImage(imgArray);
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

        imgArray.push(imgName)


        programacionArrayPhoto[i].mv(`backend/public/images/programacion/image-array/${imgName}`, async(err) => {

            if (err) {
                await removeImage(imgArray);
                return res.status(500).json({
                    ok: false,
                    err
                });
            }

        });
    }

    const obj = { imgArray };

    const options = { new: true, runValidators: true, context: 'query' };

    Programacion.findByIdAndUpdate(id, obj, options, async(err, programacionDB) => {
        if (err) {
            await removeImage(imgArray);
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if (!programacionDB) {
            await removeImage(imgArray)
            return res.status(400).json({
                ok: false,
                err: {
                    messaje: 'El registro no existe.'
                }
            });
        }

        res.json({
            ok: true,
            message: 'Imágenes guardadas correctamente.'
        });

    });

};

let removeImage = async(imageArr) => {

    setTimeout(() => {

        imageArr.forEach(imgName => {

            let pathImage = path.resolve(__dirname + `../../../../../public/images/programacion/image-array/${imgName}`);

            if (fs.existsSync(pathImage)) {

                fs.unlinkSync(pathImage);
            }
        });

    }, 3000)

}



module.exports = imageArrayProgramacionCtrlsPost;