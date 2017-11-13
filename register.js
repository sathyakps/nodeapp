var MongoClient = require('mongodb').MongoClient;
var url = require('./config')

exports.getUsers = function(req,res){
  MongoClient.connect(url.url,function(err, db){
        db.collection('Users').find().toArray(function(err,allData){
          res.send(allData);
          db.close();
        })
      })
}



exports.registerUser = (req,res) => {
    MongoClient.connect(url.url,function(err, db){
        db.collection('Users').insert(req.body, function(err,allData){
            if(!err) {
                res.json({"status":true,"message":"User Registered Succesfully"});
                db.close();
            } else {
                res.json({"status":false,"message":" Registered Failed"});
                db.close();
            }
         
        })
      })
}
