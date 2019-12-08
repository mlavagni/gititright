var router = require('express').Router();
var userAccessCtrl = require('../controllers/allowAccess');


router.use (isLoggedIn)

router.get('/allowAccess', userAccessCtrl.index);
router.post('/users/:id/allowAccess', userAccessCtrl.create);
router.delete('/allowAccess/:id' , userAccessCtrl.delete)


function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }
  
module.exports = router;