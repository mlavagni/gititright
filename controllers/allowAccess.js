const User = require('../models/user');

module.exports = {
  index,
  create

};

function create(req, res, next) {
  for(let key in req.body){
      if (req.body[key]=== '') {
        delete req.body[key];
      }
  }
 
  console.log("**********")
  console.log('we are in create - prams id')
  console.log(req.params._id)
  console.log("**********")
  User.findById(req.user).exec(function(err, user) {
    console.log("**********")
    console.log('we are in create - find by id')
    console.log(req.user)
    console.log("**********")
      user.allowAccess.push(req.params._id);
      user.save (function(err) {
          if (err) return next(err); 
          res.render('/allowAccess', {user});
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
      res.render('allowAccess/index', {
        
         users,
         user: req.user,
         name: req.query.name,
         sortKey
      });
    
    });
  }
