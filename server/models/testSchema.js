const mongoose = require('mongoose');
const Schema = mongoose.Schema();

var test = new Schema({
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
    weight:{
        type:Number
    }
},{
    timestamp:true
});

exports.module = mongoose.model('Test',test);
