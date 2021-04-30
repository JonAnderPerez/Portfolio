/* Config no añadido a GIT */

const admin = require("firebase-admin");
const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const cors = require("cors")({origin: true});
let config = require("./config");

admin.initializeApp();

exports.sendContactFormSubmittedEmail = functions.https.onRequest((req, res) => {
    var text = `<p><b>${req.body.nombre}</b> te ha enviado un mensaje mediante el formulario de contacto de tu portfolio web.</p>
                <p><b>Email</b>: ${req.body.email}</p>
                <p><b>Asunto</b>: ${req.body.asunto}</p>
                <p><b>Mensaje</b>: ${req.body.mensaje}</p>`;
    
    return cors(req, res, () => {
        var transporter = nodemailer.createTransport(`smtps://${config.fromEmail}:${config.password}@${config.host}`);

        const mailOptions = {
            from: config.fromEmail,
            to: config.toEmail,
            subject: `Mensaje de ${req.body.nombre} via portfolio.`,
            html: text
        };

        transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
                console.log(error);
            }
            res.status(200).send({
                message: 'success'
            });
        });
    });
});