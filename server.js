const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (like your HTML, CSS, and JS files)
app.use(express.static(path.join(__dirname, 'public')));

// POST route to handle form submission
app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;

    // Create a transporter using SMTP (you can use Gmail or any email service)
    const transporter = nodemailer.createTransport({
        service: 'gmail', // Or use your email provider (e.g., 'hotmail', 'yahoo')
        auth: {
            user: 'nikitapatil12334@gmail.com',  // Replace with your email address
            pass:'jtad prga nqhe gtzw'  // Replace with your email password (or use OAuth2)
        }
    });

    // Set up the email options
    const mailOptions = {
        from: email, // Sender's email
        to: 'your-email@gmail.com', // Receiver's email (your email for getting notifications)
        subject: 'New Contact Form Submission',
        text: `You have a new message from ${name} (${email}):\n\n${message}`
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).send('Something went wrong. Please try again later.');
        } else {
            console.log('Email sent: ' + info.response);
            return res.status(200).send('Thank you for your message! We\'ll get back to you soon.');
        }
    });
});

// Serve index.html (your main portfolio page)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Front-end', 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
