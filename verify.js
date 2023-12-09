// const express = require('express');
// const mongoose = require('mongoose');
// const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const nodemailer = require('nodemailer');
// const multer = require('multer');
// const path = require('path');

// const app = express();

// // Connect to MongoDB Atlas
// mongoose.connect('mongodb+srv://sai:nebula123@cluster0.l9c5xyp.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(err => console.error('Error connecting to MongoDB', err));

// // Passport setup
// passport.use(new GoogleStrategy({
//     clientID: '772787922-4une922l7nn5vpdsucq5fj6r9l1m8j5j.apps.googleusercontent.com',
//     clientSecret: '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',
//     callbackURL: 'http://localhost:3000/auth/google/callback',
// }, (accessToken, refreshToken, profile, done) => {
//   // Handle user creation/updating logic here
//   return done(null, profile);
// }));

// passport.serializeUser((user, done) => {
//   done(null, user);
// });

// passport.deserializeUser((obj, done) => {
//   done(null, obj);
// });

// // Express middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(require('express-session')({ secret: '32577272fdc02f1a54465049bb03375bf860acaa4f1166226023b4ca23e9c21', resave: true, saveUninitialized: true }));
// app.use(passport.initialize());
// app.use(passport.session());

// // Nodemailer setup
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'contact.nebulaapparel@gmail.com',  // Update with your Gmail address
//     pass: 'pgfksxpluzffqifj' 
//   },
// });

// // Multer setup for file uploads
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

// // Routes
// app.get('/', (req, res) => {
//   res.send('Home Page');
// });

// app.get('/auth/google',
//   passport.authenticate('google', { scope: ['profile', 'email'] })
// );

// app.get('/auth/google/callback',
//   passport.authenticate('google', { failureRedirect: '/' }),
//   (req, res) => {
//     res.redirect('/login-success');
//   }
// );

// app.get('/login-success', (req, res) => {
//   // Handle successful login, redirect to verify letter page
//   res.send('Login Successful! Go to the verify letter page.');
// });

// app.get('/verify-letter', (req, res) => {
//   res.sendFile(path.join(__dirname, 'verify-letter.html'));
// });
// app.post('/upload-letter', upload.single('letter'), (req, res) => {
//     // Check if the user is authenticated
//     if (!req.isAuthenticated()) {
//       return res.redirect('/');
//     }
  
//     // Get user details from the authenticated user
//     const user = req.user;
  
//     // Access user information, considering that 'emails' is an array
//     const userEmail = user.emails && user.emails.length > 0 ? user.emails[0].value : 'Unknown';
  
//     // Rest of your code...
  
//     const mailOptions = {
//       from: 'your-gmail@gmail.com',  // Update with your Gmail address
//       to: 'contact.nebulaapparel@gmail.com',
//       subject: 'New Letter Uploaded',
//       text: A new letter has been uploaded by ${userEmail}. Please verify it.,
//       attachments: [
//         {
//           filename: req.file.originalname,
//           content: req.file.buffer,
//         }
//       ],
//     };
  
//     transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//         return console.log(error);
//       }
//       console.log('Email sent: ' + info.response);
//     });
  
//     res.send('Letter uploaded successfully! Wait for verification.');
//   });
  

// // Start server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(Server is running on port ${PORT});
// });