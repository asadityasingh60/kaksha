const mongoose = require('mongoose');
const Schema = mongoose.Schema();

var classroom = new Schema({
    name:{
         type:String,
         required:true
     },
    teachers:[{
        type:String,
        required:true
    }],
    students:[{
        type:String,
        required:true
    }],
    time:{
        type:String,
    },
    assignments:[{
        type:String
    }],
    tests:[{
        type:String
    }]
},{
    timestamp:true
});

exports.module = mongoose.model('class',classroom);
