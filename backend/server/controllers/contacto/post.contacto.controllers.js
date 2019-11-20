const contactoCtrlsPost = {};

contactoCtrlsPost.sendEmail = (req, res, next) => {
    const { name, email, body } = req.body;

    const emptyForm = contentFormFailed(req.body);

    if (emptyForm) {
        return res.status(400).json({
            ok: false,
            err: {
                message: emptyForm
            }
        });
    }

    if (typeof name != 'string' || typeof email != 'string' || typeof body != 'string') {
        return res.status(400).json({
            ok: false,
            err: {
                message: 'Formato inválido.'
            }
        });
    }

    res.json({
        ok: true,
        message: 'He recibido su mensaje, me comunicaré con usted lo más pronto posible. ¡Gracias por contactarme!'
    })


}


const contentFormFailed = (body) => {
    if (!body.name) {
        return 'El nombre es obligatorio.'
    }

    if (!body.email) {
        return 'El correo es obligatorio.'
    }

    if (!body.body) {
        return 'No ha enviado el texto principal.'
    }

    return false;
}


module.exports = contactoCtrlsPost;