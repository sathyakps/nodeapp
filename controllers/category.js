var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose')
var url = require('./../config')
var categorySchema = require('../schema/category').categorySchema;


exports.getCategory = function(req,res) {
  var id =res.locals['user']._id + '_Master';
  var category = mongoose.model(id, categorySchema,id);
  category.find({category:{'$exists':true}},(err,categories) => {
    res.send(categories)
  })
}



exports.addCategory = function(req,res) {
  var id =res.locals['user']._id + '_Master';
  var category = mongoose.model(id, categorySchema,id);
  category.findOneAndUpdate({"category":{$exists:true}},{ $push: { "category": req.body } },{upsert:true},function(err,data){
        if(!err){
           category.find({"category":{$exists:true}},function(err,data){
              res.send(data);
          })
        }
      })
}
