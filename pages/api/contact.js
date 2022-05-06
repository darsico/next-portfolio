// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import nodemailer from "nodemailer";

async function handler(req, res) {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.user,
      pass: process.env.pass,
    },
  });

  try {
    const emailResponse = await transporter.sendMail({
      from: email,
      to: "diegojairhl@gmail.com",
      subject: `Formulario de contacto de ${name} | Portafolio`,
      html: `
      <p>Tienes un nuevo contacto del formulario</p><br>
      <p><strong>Nombre: </strong> ${name}</p><br>
      <p><strong>Email: </strong> ${email}</p><br>
      <p><strong>Message: </strong> ${message}</p><br>
      `,
    });

    console.log("Message Sent", emailResponse.messageId);
  } catch (error) {
    console.log(error);
  }

  res.status(200).json(req.body);
}

export default handler;
