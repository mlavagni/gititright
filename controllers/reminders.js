const User = require('../models/user');

module.exports = {
 index,
 create,
 delete: deleteReminder,
 update: updateReminder
  };
  

  function updateReminder(req, res, next) {
    User.findById(req.session.passport.user, function(err, user) {
     
         for (var i=0;i < user.reminders.length; i++) {
            if (user.reminders[i]._id == req.body._id) {
                user.reminders[i].name = req.body.name
                let dateRemainder = req.body.date

                user.reminders[i].date = req.body.date
                user.reminders[i].daysBefore = req.body.daysBefore
                break; //Stop this loop, we found it!
            }
         }
        user.save (function(err) {
            if (err) return next(err)
            res.redirect(`/reminders`)
        })
    })
     
  }




 function deleteReminder(req, res, next) {
 User.findById(req.user, function(err, user) {
    // Removing document from the embedded schema
    user.reminders.id(req.params.id).remove();
    user.save(function (err) {
        if (err) return next(err);
        res.redirect(`/reminders`);
        });
    })
 }

 function create(req, res, next) {
    for(let key in req.body){
        if (req.body[key]=== '') {
          delete req.body[key];
        }
    }
    console.log(req.body)
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



