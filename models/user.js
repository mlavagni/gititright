const mongoose = require('mongoose')
const Schema = mongoose.Schema


let articleSchema = new Schema({
    name: {
        type: String,
    },
    size: {
        type: String,
    },
    description: {
        type: String,
    },
    brands: {
        type: []
    }

    });

let giftSchema = new Schema({
    url: {
        type: String,
    },
    sizshoppingCentere: {
        type: String,
    },
    quantity: {
        type: Number,
    },
    description: {
        type: String,
    },
    rate: {
        type: Number,
    },
    isDelivered: {
        type: Boolean,
    },
    shoppingStatus: {
        type: Boolean,
    },    
    
});

let reminderSchema = new Schema({
    name: {
        type: String,
    },
    date: {
        type: Date,
    },
    daysBefore: {
        type: Number,
    },

});

let userSchema = new Schema({
    googleId: String,
    email: String,
    name: String,
    avatar: String,
    lastName: String,
    shippingAddress: String,
    sizes: [articleSchema],
    wishLists:[giftSchema],
    reminders:[reminderSchema],
    usersAllow: [],
    isUserActive: Boolean,
  }, {
    timestamps: true
  });


  module.exports = mongoose.model('User', userSchema);