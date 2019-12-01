const User = require('../models/user');

module.exports = {
  
    index,
  
  };

function index(req, res, next) {
    User.findById(req.session.passport.user).exec(function(err, user) {
    if (err) return next(err); 
        res.render('wishLists/index', {user});
    })
}

  
