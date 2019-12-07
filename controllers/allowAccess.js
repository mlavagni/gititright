const User = require('../models/user');

module.exports = {
  index,
  create,
  delete: removeAccess
};

function removeAccess(req, res, next) {
  
  User.findById(req.user, function(err, user) {

     // Removing document from the embedded schema  
      let index = user.allowAccess.indexOf(req.params.id);
      if (index > -1) {
        user.allowAccess.splice(index, 1);
        }
    
     user.save(function (err) {
         if (err) return next(err);
         res.redirect(`/allowAccess`);
         });
     })
  }


function create(req, res, next) {
  for(let key in req.body){
      if (req.body[key]=== '') {
        delete req.body[key];
      }
  }
 

  User.findById(req.user).exec(function(err, user) {
   
      user.allowAccess.push(req.params.id);
      user.save (function(err) {
          if (err) return next(err); 
          console.log(user)
          res.redirect('/allowAccess'); 
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
      // console.log(users)

      res.render('allowAccess/index', {
        
         users,
         user: req.user,
         name: req.query.name,
         sortKey
      });
    
    });
  }
