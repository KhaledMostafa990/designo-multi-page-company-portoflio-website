// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nodemailer from 'nodemailer';
import type { NextApiRequest, NextApiResponse } from 'next';
import { ContactInputsProps } from '@/components/ContactForm';

type Data = {
  message: string;
};

export default async function sendEmail(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === 'POST') {
    const formData = <ContactInputsProps>req.body;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT!, 5),
      secure: false,
      auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const message = {
      from: process.env.SMTP_FROM_ADDRESS,
      to: process.env.SMTP_TO_ADDRESS,
      subject: 'New Message from Contact Form',
      html: `
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Message:</strong> ${formData.message}</p>
      `,
    };

    try {
      const info = await transporter.sendMail(message);
      console.log('Message sent: %s', info.messageId);
      res.status(200).json({ message: 'Email sent' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error sending email' });
    }
  }
}
