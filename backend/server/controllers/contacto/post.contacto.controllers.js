const helper = require('sendgrid').mail;
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

    const correo = `Mensaje de: ${name}.
    Correo: ${email}
    -----------------
    ${body}`;

    const from_email = new helper.Email('portafolio@andresmateo.com');
    const to_email = new helper.Email('andresraul@gmail.com');
    const subject = `Desde el portafolio, correo de: ${name}`;
    const content = new helper.Content('text/plain', correo);
    const mail = new helper.Mail(from_email, subject, to_email, content);

    let sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
    const request = sg.emptyRequest({
        method: 'POST',
        path: '/v3/mail/send',
        body: mail.toJSON(),
    });

    sg.API(request, function(error, response) {
        if (error) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'No hemos podido enviar su mensaje por problemas en el servidor. Si es posible, Inténtelo más tarde. Disculpe las molestias'
                }
            });
        }
        console.log(response.statusCode);
        console.log(response.body);
        console.log(response.headers);
        res.json({
            ok: true,
            message: 'He recibido su mensaje y me comunicaré con usted lo más pronto posible. ¡Gracias por contactarme!'
        })
    });

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