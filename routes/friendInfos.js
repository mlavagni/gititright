var router = require('express').Router();
var friendInfosCtrl = require('../controllers/friendInfos');


router.use (isLoggedIn)

router.get('/friendInfos', friendInfosCtrl.index);
router.post('/users/:id/friendInfos', friendInfosCtrl.create);
router.delete('/friendInfos/:id' , friendInfosCtrl.delete)


function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }
  
module.exports = router;