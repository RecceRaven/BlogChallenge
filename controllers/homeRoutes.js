const express = require('express');
const router = express.Router();

// Example routes
router.get('/', async (req, res) => {
  res.render('landing.handlebars');
});

// Login route
router.get('/login', async (req, res) => {
  res.render('login.handlebars');
});

// Home routes
router.get('/home', async (req, res) => {
  res.render('home.handlebars');
});

router.get('/dashboard', (req, res) => {
  // Check if the user is logged in
  if (req.session.userId) {
    res.render('dashboard');
  } else {
    res.redirect('/login');
  }
});

// Add more routes as needed

module.exports = router;
