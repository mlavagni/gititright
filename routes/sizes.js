var router = require('express').Router();
var sizesCtrl = require('../controllers/sizes');

// GET / articles sizes
// router.get('/sizes/b', sizesCtrl.index);
router.get('/users/:id/sizes', sizesCtrl.index);
router.get('/sizes',sizesCtrl.index);
router.get('/users/sizes', sizesCtrl.index);

router.post('/users/:id/sizes', sizesCtrl.create);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }
module.exports = router;