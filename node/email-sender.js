const nodemailer = require('nodemailer');

// Create a transporter object using your email service provider details
const transporter = nodemailer.createTransport({
  service: 'your-email-service-provider', // e.g., 'gmail'
  auth: {
    user: 'your-email@example.com',
    pass: 'your-email-password',
  },
});

// Email options
const mailOptions = {
  from: 'your-email@example.com',
  to: 'your-recipient@example.com',
  subject: 'Testing Nodemailer',
  text: 'Hello from Nodemailer!',
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});