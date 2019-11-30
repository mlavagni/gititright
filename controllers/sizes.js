const User = require('../models/user');


module.exports = {
    create,
    show,
    index
  };


  function index(req, res, next) {

  console.log('entro al index de sizes')
//  console.log(req.session.passport.user)
   // User.find( { 'sizes': req.session.passport.user }).exec(function(err, users) {
   //   if (err) return next(err);
    //  console.log(err)
    User.findById(req.session.passport.user).exec(function(err, user) {
  
        if (err) return next(err); 
      
        res.render('sizes/index', {user});
        })
      //res.render('sizes/index', {
      //   users
        //  user: req.user,
        //  name: req.query.name
    //  });
   // });
// res.render('sizes/index') 
  }

  
  function show(req, res) {
    // User.findById(req.params.id, function(err, flight) {
      User.findById(req.session.passport.user).exec(function(err, user) {
    
        if (err) return next(err); 
      
        res.render('sizes/index', {user});
        })
  }

  function create(req, res, next) {
      console.log('entro al create')
      console.log("**********")
      console.log(req.body)
      console.log("**********")
    User.findById(req.session.passport.user).exec(function(err, user) {
    user.sizes.push(req.body);
    user.save (function(err) {
        if (err) return next(err); 
        res.render('sizes/index', {user});
        })
    })
    }
