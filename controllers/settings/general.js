
var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
var url = require('../../config');
var user = require('../././../schema/users').User;


exports.getGeneralData = (req,res,next) => {

  var userData = {
    email: res.locals['user'].email,
    category: res.locals['user'].category,
    businessName: res.locals['user'].businessName,
    mobileNumber :res.locals['user'].mobileNumber
  };
  res.send(userData);
  res.end();

};


exports.setGeneralData = (req,res,next) => {
  var id =res.locals['user']._id;
  user.findOneAndUpdate({_id:id},req.body,{new: false, fields:req.body},(err,update)=> {
    if(!err) {
      res.send(update);
      res.end()
    }
  })
}
