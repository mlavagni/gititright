var router = require('express').Router();
var userAccessCtrl = require('../controllers/allowAccess');

// GET / articles sizes
router.get('/allowAccess', userAccessCtrl.index);
router.post('/users/:id/allowAccess', userAccessCtrl.create);
// router.post('/users/:id/sizes', userCtrl.create);
// router.delete('/allow-users/:id' , userCtrl.delete)
// router.put('/allow-users/:id',userCtrl.update);



function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }
module.exports = router;