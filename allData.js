var MongoClient = require('mongodb').MongoClient;
var url = require('./config')

exports.getData = function(req,res){
  MongoClient.connect(url.url,function(err, db){
        db.collection('Graabo').find().toArray(function(err,allData){
          res.send(allData);
          db.close();
        })
      })
}
