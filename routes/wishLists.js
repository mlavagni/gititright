var router = require('express').Router();
var wishListsCtrl = require('../controllers/wishLists');

router.use (isLoggedIn)

router.get('/wishLists',wishListsCtrl.index);
router.post('/users/:id/wishLists', wishListsCtrl.create);
router.delete('/wishLists/:id' , wishListsCtrl.delete)
router.put('/wishLists/:id',wishListsCtrl.update);


function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }
module.exports = router;





