var router = require('express').Router();
var remindersCtrl = require('../controllers/reminders');

// GET / reminders
router.get('/reminders',remindersCtrl.index);
router.post('/users/:id/reminders',remindersCtrl.create);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }

module.exports = router;