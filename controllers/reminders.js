const User = require('../models/user');

module.exports = {
 index,
 create,
 delete: deleteReminder,
 update: updateReminder
  };
  

  function updateReminder(req, res, next) {
    console.log('*************')
    console.log("entro al update")
    console.log(req.body)
     User.findById(req.session.passport.user).exec(function(err, user) {

    //     user.name = req.body.name
    //     user.lastName = req.body.lastName
    //     user.save (function(err) {
    //         if (err) return next(err); 
    //         res.render('users/show', {user});
    //     })
    // })
//   }
//     User.reminder.findOneAndUdate(
//     { "_id": req.session.passport.user, "reminder._id": req.params.id },
//     {
//         "$set": {
//             "name": filedata.name,
//             "date": filedata.size,
//             "daysBefore": filedata.type
//         }
//     },
//     function(err,user) {


//     }
// );
res.redirect(`/reminders`);
     })
  }

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



