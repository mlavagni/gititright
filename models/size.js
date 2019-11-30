const mongoose = require('mongoose')
const Schema = mongoose.Schema

let sizeSchema = new Schema({
    name:{
        type: String
    },
    size:{
        type:String
    },
    description:{
        type:String
    },
    brands:{
    type:String
    }
},{
        timestamps: true
      });



    module.exports = mongoose.model('Size', sizeSchema);