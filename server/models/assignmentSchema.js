const mongoose = require('mongoose');
const Schema = mongoose.Schema();

var assignment = new Schema({
    name:{
         type:String,
         required:true
    },
    date:{
        type:Date,
        required:true
    },
    class:{
        type:String
    },
    students:[{
        type:String,
    }],
    dueDate:{
        type:Date
    },
    weight:{
        type:Number
    }
},{
    timestamp:true
});

exports.module = mongoose.model('assignment',assignment);
