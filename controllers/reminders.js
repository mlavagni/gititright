const User = require('../models/user');

module.exports = {
 index,
 create,
 delete: deleteReminder
  };

 function deleteReminder(req, res, next) {
 User.findById(req.session.passport.user, function(err, user) {
    // Removing document from the embedded schema
    user.reminders.id(req.params.id).remove();
    user.save(function (err) {
        if (err) return next(err);
        res.redirect(`/reminders`);
        });
    })
 }

 function create(req, res, next) {
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



