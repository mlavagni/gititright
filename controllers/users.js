const User = require('../models/user');
const Size = require('../models/size')

module.exports = {
  index,
  new: newUser,
  show
};

// function show(req, res) {
//   // User.findById(req.params.id, function(err, flight) {
//     User.findById(req.session.passport.user).exec(function(err, user) {
  
//       if (err) return next(err); 
    
//       res.render('sizes/index', {user});
//       })
// }

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
 
  User.findById(req.session.passport.user).exec(function(err, user) {
  
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



