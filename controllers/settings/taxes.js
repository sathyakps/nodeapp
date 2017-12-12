var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
var url = require('../../config');
var user = require('../././../schema/users').User;


exports.getTaxes = (req,res,next) => {
  userData ={
    taxes: res.locals['user'].taxes
  }
  res.send(userData);
  res.end()
}

exports.setTaxes = (req,res,next) => {
  var id =res.locals['user']._id;
  user.findOneAndUpdate({_id:id},{taxes:req.body},{new: true, fields:{taxes:1}},(err,update)=> {
    if(!err) {
      res.send(update);
      res.end()
    }
  })
}
