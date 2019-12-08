var router = require('express').Router();
var sizesCtrl = require('../controllers/sizes');

router.use (isLoggedIn)

router.get('/sizes',sizesCtrl.index);
router.post('/users/:id/sizes', sizesCtrl.create);
router.delete('/sizes/:id' , sizesCtrl.delete)
router.put('/sizes/:id',sizesCtrl.update);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }
  
module.exports = router;