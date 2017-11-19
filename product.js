var MongoClient = require('mongodb').MongoClient;
var url = require('./config')

exports.addProduct = function(req,res){
  var category= req.params.category;
  MongoClient.connect(url.url,function(err, db){
    db.collection('Graabo').update ({"categoryName":category},{ $push:{"products":req.body}},{upsert:true}, function(err,data){
      if(!err) {
        db.collection('Graabo').find().toArray(function(err,allData){
          res.send(allData);
          db.close();
        })
      }else {
        db.close()
      }
    })
})
}


exports.getProductByCategory = function (req,res) {
  var category= req.params.category;
  var temp ={};
  temp[category]={$exists:true};
  MongoClient.connect(url.url,function(err, db){
    db.collection('Graabo').findOne(temp, function(err,data){
      if(!err) {
          res.send(data);
          db.close();
        }else {
          db.close();
        }
      })
})
}
