var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
var url = require('../../config');
var user = require('../././../schema/users').User;


exports.getPaymentTypes = (req,res,next) => {
  userData ={
    payment: res.locals['user'].payment
  }
  res.send(userData);
  res.end()
}

exports.setPaymentTypes = (req,res,next) => {
  var id =res.locals['user']._id;
  user.findOneAndUpdate({_id:id},{payment:req.body},{new: true, fields:{payment:1}},(err,update)=> {
    if(!err) {
      res.send(update);
      res.end()
    }
  })
}
