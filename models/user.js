var mongoose = require('mongoose');


// The factSchema is used to embedded docs in as tudent doc.
// There is no model and no 'facts' collection
var factSchema = new mongoose.Schema({
    text: String
  }, {
    timestamps: true
  });

var studentSchema = new mongoose.Schema({
    googleId: String,
    email: String,
    name: String,
    avatar: String,
    lastName: String,
    shippingAddress: String,
    sizes: [],
    wishLists:[],
    reminders:[],
    usersAllow: [],
    isUserActive: Boolean,
    facts: [factSchema],
    
  }, {
    timestamps: true
  });


  module.exports = mongoose.model('Student', studentSchema);