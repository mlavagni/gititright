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
        type: String
    }

    });

let wishListSchema = new Schema({
    name:{
        type: String
    },
    url: {
        type: String,
    },
    shoppingCenter:{
        type:String
    },
    quantity:{
        type:Number
    },
    description:{
        type:String
    },
    rate:{
    type:Boolean
    },
    isRecieved:{
        type:Boolean
    },
    shoppingStatus:{
        type:String
            // type:Object{
            //     isTaken: Boolean
            //     who: String
            // }
            },
},{
        timestamps: true
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
    wishLists:[wishListSchema],
    reminders:[reminderSchema],
    usersAllow: [],
    isUserActive: Boolean,
  }, {
    timestamps: true
  });


  module.exports = mongoose.model('User', userSchema);