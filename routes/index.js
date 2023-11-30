var express = require('express');
var passport = require('passport');
var router = express.Router();
var Account = require('../models/account');
router.get('/', function (req, res) {
  res.render('index', { title: 'Fruits App', user: req.user });
});
router.get('/register', function (req, res) {
  res.render('register', { title: 'Fruits App Registration' });
});
router.post('/register', function (req, res) {
  console.log("here")
  Account.findOne({ username: req.body.username })
    .then(function (user) {
      if (user != null) {
        console.log("exists " + req.body.username)
        return res.render('register', {
          title: 'Registration',
          message: 'Existing User', account: req.body.username
        })
      }
      let newAccount = new Account({ username: req.body.username });
      Account.register(newAccount, req.body.password, function (err, user) {
        if (err) {
          console.log("db creation issue " + err)
          return res.render('register', {
            title: 'Registration',
            message: 'access error', account: req.body.username
          })
        }
        if (!user) {
          return res.render('register', {
            title: 'Registration',
            message: 'access error', account: req.body.username
          })
        }
      })
      console.log('Sucess, redirect');
      res.redirect('/');
    })
    .catch(function (err) {
      return res.render('register', {
        title: 'Registration',
        message: 'Registration error', account: req.body.username
      })
    })
});

const secured = (req, res, next) => {
  if (req.user){
  return next();
  }
  res.redirect("/login");
  }
router.get('/login', function (req, res) {
  res.render('login', { title: 'Fruits App Login', user: req.user });
});
router.post('/login', passport.authenticate('local'), function (req, res) {
  res.redirect('/');
});
router.get('/logout', function (req, res) {
  req.logout(function (err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
});
router.get('/ping', function (req, res) {
  res.status(200).send("pong!");
});

module.exports = router