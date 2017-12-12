var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
var url = require('../../config');
var user = require('../././../schema/users').User;


exports.getPOS= (req,res,next) => {
  userData ={
    terminal: res.locals['user'].terminal
  }
  res.send(userData);
  res.end()
}


exports.setPOS = (req,res,next) => {
  var id =res.locals['user']._id;
  user.update({ _id: id },{ $push: { terminal: req.body.pos } },(err, update) => {
     if(!err) {
        MongoClient.connect(url.url,(err,db)=> {
            if(!err) {
                 db.collection('Users').update({"storeName.name":req.body.pos.for, _id:id},{$inc:{"storeName.$.noPos":1}},(err,udt)=> {
                   db.collection('Users').findOne({_id:id},(err,userData)=> {
                     res.send(userData.terminal);
                     res.end();
                     db.close();
                   })
                 });
              }
        })
      }
     })
   }


exports.deletePOS = (req,res,next) => {
  var id =res.locals['user']._id;
  user.update({ _id: id },{ $pull: { terminal: req.body.pos } },(err, update) => {
    if(!err) {
      MongoClient.connect(url.url,(err,db)=> {
          if(!err) {
                db.collection('Users').update({"storeName.name":req.body.pos.for, _id:id},{$inc:{"storeName.$.noPos":-1}},(err,udt)=> {
                  db.collection('Users').findOne({_id:id},(err,userData)=> {
                    res.send(userData.terminal);
                    res.end();
                    db.close();
                  })
                });
            }
      })
    }
    })
  }


exports.updatePOS = (req,res,next) => {
  var id =res.locals['user']._id;
  user.findOneAndUpdate({_id:id},{terminal:req.body},{new: true, fields:{terminal:1}},(err,update)=> {
    if(!err) {
      res.send(update);
      res.end()
    }
  })
}

