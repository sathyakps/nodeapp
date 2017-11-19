var MongoClient = require('mongodb').MongoClient;
var url = require('./config')
exports.getCategory = function(req,res) {
  MongoClient.connect(url.url,function(err, db){
    db.collection('Graabo').find({"category":{$exists:true}}).toArray(function(err,data){
      res.send(data)
      db.close();
      
    })
    
})
}



exports.addCategory = function(req,res) {
  MongoClient.connect(url.url,function(err, db){
    db.collection('Graabo').updateOne({"category":{$exists:true}},{ $push: { "category": req.body } },function(err,data){
      if(!err){
          db.collection('Graabo').find({"category":{$exists:true}}).toArray(function(err,data){
            db.close();
            res.send(data);
          })
         }
         else {
           db.close()
         }
        })
      });
}
