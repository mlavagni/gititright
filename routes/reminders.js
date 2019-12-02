var router = require('express').Router();
var remindersCtrl = require('../controllers/reminders');

// GET / reminders
router.get('/reminders',remindersCtrl.index);
router.post('/users/:id/reminders',remindersCtrl.create);
router.delete('/reminders/:id',remindersCtrl.delete);
router.post('/reminders/:id',remindersCtrl.update);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }

module.exports = router;