import { useState } from "react";
import nodemailer from "nodemailer";

const useContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Configura el transporte de correo electrónico con la información de tu cuenta de ForwardEmail
    const transporter = nodemailer.createTransport({
      host: "smtp.forwardemail.net",
      port: 465,
      secure: true,
      auth: {
        user: "REPLACE-WITH-YOUR-ALIAS@YOURDOMAIN.COM",
        pass: "REPLACE-WITH-YOUR-GENERATED-PASSWORD",
      },
    });

    // Configura los detalles del correo electrónico
    const mailOptions = {
      from: '"Fred Foo 👻" <foo@example.com>',
      to: "bar@example.com, baz@example.com",
      subject: "Hello ✔",
      text: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
      html: `<b>Name:</b> ${formData.name}<br/><b>Email:</b> ${formData.email}<br/><b>Message:</b> ${formData.message}`,
    };

    try {
      // Envía el correo electrónico
      const info = await transporter.sendMail(mailOptions);
      console.log("Message sent:", info.messageId);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return { formData, handleChange, handleSubmit };
};

export default useContactForm;
