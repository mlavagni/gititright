var router = require('express').Router();
var usersCtrl = require('../controllers/users');

// GET /users
router.get('/users', usersCtrl.index);
router.get('/users/show',usersCtrl.show);
router.post('/users/:id',usersCtrl.update);


function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }
module.exports = router;