var router = require('express').Router();
var wishListsCtrl = require('../controllers/wishLists');

router.use (isLoggedIn)

router.get('/wishLists',wishListsCtrl.index);


function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }
module.exports = router;