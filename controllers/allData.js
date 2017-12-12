var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose')
var url = require('./../config')
var categorySchema = require('../schema/category').categorySchema;

exports.getData = function(req,res){
  var id =res.locals['user']._id + '_Master';
  var category = mongoose.model(id, categorySchema,id);
  category.find((err,categories) => {
    res.send(categories)
  })
}
