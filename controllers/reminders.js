const User = require('../models/user');

module.exports = {
 index,
 create
  };


  function create(req, res, next) {
      console.log('entro al create')
    User.findById(req.session.passport.user).exec(function(err, user) {
        user.reminders.push(req.body);
        user.save (function(err) {
            if (err) return next(err); 
            res.render('reminders/index', {user});
        })
    })
}

function index(req, res, next) {
    User.findById(req.session.passport.user).exec(function(err, user) {
    if (err) return next(err); 
        res.render('reminders/index', {user});
    })
}

  

