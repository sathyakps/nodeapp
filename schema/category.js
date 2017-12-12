var mongoose = require('mongoose');
var Schema = mongoose.Schema;

exports.categorySchema = new Schema ({
  _id: Schema.ObjectId,
  category: [{name:String,description:String,status:Boolean}]
},{strict:false});


