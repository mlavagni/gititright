const User = require('../models/user');
//const Size = require('../models/size');

module.exports = {
    create,
    show,
    index,
    delete: deleteSize,
    update: updateSize
  };

  function updateSize(req, res, next) {
    User.findById(req.user, function(err, user) {
     
         for (var i=0;i < user.sizes.length; i++) {
            if (user.reminders[i]._id == req.body._id) {
                user.reminders[i].name = req.body.name
                user.reminders[i].size = req.body.size
                user.reminders[i].brands = req.body.brands
                user.reminders[i].description = req.body.description
                
                break; //Stop this loop, we found it!
            }
         }
        user.save (function(err) {
            if (err) return next(err)
            res.redirect(`/sizes`)
        })
    })
     
  }


function deleteSize(req, res, next) {
    User.findById(req.user, function(err, user) {
        // Removing document from the embedded schema
        user.sizes.id(req.params.id).remove();
        user.save(function (err) {
            if (err) return next(err);
            res.redirect(`/sizes`);
        });
    })
}

function index(req, res, next) {

    User.findById(req.user).exec(function(err, user) {
    if (err) return next(err); 
        res.render('sizes/index', {user});
    })
}

  
function show(req, res) {
    // console.log('****************')
    // console.log(req.user.id)
    // console.log('****************')
    User.findById(req.user).exec(function(err, user) {
    if (err) return next(err); 
        res.render('sizes/index', {user});
    })
}

function create(req, res, next) {
    for(let key in req.body){
        if (req.body[key]=== '') {
          delete req.body[key];
        }
    }
    User.findById(req.user).exec(function(err, user) {
        user.sizes.push(req.body);
        user.save (function(err) {
            if (err) return next(err); 
            res.render('sizes/index', {user});
        })
    })
}
