var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
var url = require('../../config');
var user = require('../././../schema/users').User;


exports.getStores = (req,res,next) => {
  userData ={
    storeName: res.locals['user'].storeName
  }
  res.send(userData);
  res.end()
}


exports.setStores = (req,res,next) => {
  var id =res.locals['user']._id;
  user.findOneAndUpdate({_id:id},{storeName:req.body},{new: true, fields:{storeName:1}},(err,update)=> {
    if(!err) {
      console.log(update)
      res.send(update);
      res.end()
    }
  })
}
