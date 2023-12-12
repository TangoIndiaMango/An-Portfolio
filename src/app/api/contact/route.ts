import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

interface EmailData {
  name: string;
  email: string;
  message: string;
}

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { name, email, message }: EmailData = req.body;
    const user = process.env.user;

    console.log(name, email, message);
    console.log(req.body);

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: user,
        pass: process.env.pass,
      },
    });

    const mail = await transporter.sendMail({
      from: user,
      to: 'annajat@gmail.com',
      replyTo: email,
      subject: `Contact from portfolio ${name}`,
      html: `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
        `,
    });

    console.log('Message sent', mail.messageId);

    return res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Failed sending email from backend:', error);
    return res.status(500).json({ error: 'An error occurred sending email' });
  }
}
