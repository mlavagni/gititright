const User = require('../models/user');
const Size = require('../models/size')

module.exports = {
  index,
  new: newUser,
  show,
  update: updateUser
};

function updateUser(req, res, next) {
  User.findById(req.user).exec(function(err, user) {
      user.name = req.body.name
      user.lastName = req.body.lastName
      user.save (function(err) {
          if (err) return next(err); 
          res.render('users/show', {user});
      })
  })
}


function index(req, res, next) {
  // Make the query object to use with User.find based up
  let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};

  //Sorting by name: 
  let sortKey = req.query.sort || 'name';
  User.find(modelQuery)
  .sort(sortKey).exec(function(err, users) {
    if (err) return next(err);
    console.log(err)
    // Passing search values, name & sortKey, for use in the EJS
    res.render('users/index', {
       users,
       user: req.user,
       name: req.query.name,
       sortKey
    });
  });
}

function newUser (req, res, next){
 
  User.findById(req.user).exec(function(err, user) {
  
  if (err) return next(err); 

  res.render('users/new', {user});
  })
}

function show (req, res, next){
 
  User.findById(req.session.passport.user).exec(function(err, user) {
  
  if (err) return next(err); 

  res.render('users/show', {user});
  })
}



