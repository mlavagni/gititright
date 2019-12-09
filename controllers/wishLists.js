const User = require('../models/user');

module.exports = {
    create,
    show,
    index,
    delete: deleteWishlistItem,
    update: updateWishlist
  };

  function index(req, res, next) {
    User.findById(req.user).exec(function(err, user) {
    if (err) return next(err); 
        res.render('wishLists/index', {user});
    })
}

  function updateWishlist(req, res, next) {
    User.findById(req.user, function(err, user) {
     
         for (var i=0;i < user.wishList.length; i++) {
            if (user.wishLists[i]._id == req.body._id) {
                user.wishLists[i].name = req.body.name
                user.wishLists[i].url = req.body.url
                user.wishLists[i].shoppingCenter = req.body.shoppingCenter
                user.wishLists[i].quantity = req.body.quantity
                user.wishLists[i].description = req.body.description
                user.wishLists[i].rate = req.body.rate
                user.wishLists[i].isReceived = req.body.isReceived
                user.wishLists[i].ShoppingStatus = req.body.ShoppingStatus
                user.wishLists[i].whoBuyIt = req.body.whoBuyIt

                
                break; //Stop this loop, we found it!
            }
         }
        user.save (function(err) {
            if (err) return next(err)
            res.redirect(`/wishLists`)
        })
    })
     
  }


function deleteWishlistItem(req, res, next) {
    User.findById(req.user, function(err, user) {
        // Removing document from the embedded schema
        user.wishList.id(req.params.id).remove();
        user.save(function (err) {
            if (err) return next(err);
            res.redirect(`/wishLists`);
        });
    })
}




  
function show(req, res) {
    // console.log('****************')
    // console.log(req.user.id)
    // console.log('****************')
    User.findById(req.user).exec(function(err, user) {
    if (err) return next(err); 
        res.render('wishLists/index', {user});
    })
}

function create(req, res, next) {
    for(let key in req.body){
        if (req.body[key]=== '') {
          delete req.body[key];
        }
    }
    User.findById(req.user).exec(function(err, user) {
        user.wishLists.push(req.body);
        user.save (function(err) {
            if (err) return next(err); 
            res.render('wishLists/index', {user});
        })
    })
}

  
