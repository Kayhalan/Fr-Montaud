const {setGlobalOptions} = require("firebase-functions");
const {onRequest} = require("firebase-functions/https");
const logger = require("firebase-functions/logger");
const cors = require("cors")({ origin: true });
const nodemailer = require("nodemailer");

setGlobalOptions({ maxInstances: 10 });

// Configuration Gmail
const gmailEmail = "foyerrural.montaud@gmail.com";
const gmailPassword = "ugvf shpp dwlu eqyb";

// Transporter Nodemailer
const mailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

// Fonction pour envoyer l'email de contact
exports.sendContactEmail = onRequest((request, response) => {
  return cors(request, response, () => {
    // Vérifier que c'est une requête POST
    if (request.method !== "POST") {
      return response.status(405).send("Méthode non autorisée");
    }

    const { name, email, subject, message } = request.body;

    // Validation des données
    if (!name || !email || !subject || !message) {
      return response.status(400).send("Tous les champs sont requis");
    }

    // Configuration de l'email
    const mailOptions = {
      from: gmailEmail,
      to: gmailEmail,
      subject: `[Contact Site] ${subject}`,
      html: `
        <h2>Nouveau message depuis le site foyer-rural-montaud.com</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Sujet:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>Message envoyé depuis le formulaire de contact du site</em></p>
      `,
    };

    // Envoi de l'email
    mailTransporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        logger.error("Erreur envoi email:", error);
        return response.status(500).send("Erreur lors de l'envoi");
      }
      
      logger.info("Email envoyé:", info.response);
      return response.status(200).send("Message envoyé avec succès");
    });
  });
});
