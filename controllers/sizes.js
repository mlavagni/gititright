const User = require('../models/user');
//const Size = require('../models/size');

module.exports = {
    create,
    show,
    index,
    delete: deleteSize
  };

function deleteSize(req, res, next) {
    User.findById(req.session.passport.user, function(err, user) {
        // Removing document from the embedded schema
        user.sizes.id(req.params.id).remove();
        user.save(function (err) {
            if (err) return next(err);
            res.redirect(`/sizes`);
        });
    })
}

function index(req, res, next) {
    User.findById(req.session.passport.user).exec(function(err, user) {
    if (err) return next(err); 
        res.render('sizes/index', {user});
    })
}

  
function show(req, res) {
    User.findById(req.session.passport.user).exec(function(err, user) {
    if (err) return next(err); 
        res.render('sizes/index', {user});
    })
}

function create(req, res, next) {
    User.findById(req.session.passport.user).exec(function(err, user) {
        user.sizes.push(req.body);
        user.save (function(err) {
            if (err) return next(err); 
            res.render('sizes/index', {user});
        })
    })
}
