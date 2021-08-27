const mongoose = require('mongoose');
const Schema = mongoose.Schema();

var User = new Schema({
    username:{
         type:String,
         required:true
     },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    classes:[
        {
            type:String,
        }
    ]
},{
    timestamp:true
});

exports.module = mongoose.model('User',User);
