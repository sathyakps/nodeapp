var MongoClient = require('mongodb').MongoClient;
var url = require('./../config')

var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose')
var url = require('./../config')
var categorySchema = require('../schema/category').categorySchema;


exports.addProduct = function(req,res){
  var category= req.params.category;
  var id =res.locals['user']._id + '_Master';
  var product = mongoose.model(id,categorySchema,id);
  product.findOneAndUpdate({"categoryName":category},{ $push:{"products":req.body}},{upsert:true}, (err, data)=> {
    if(!err) {
      product.find((err, allData)=> {
        res.send(allData);
      })
  }
})
}


exports.getProductByCategory = function (req,res) {
  var category= req.params.category;
  var temp ={};
  var id =res.locals['user']._id + '_Master';
  var product = mongoose.model(id,categorySchema,id);
  temp[category]={$exists:true};
  category.find(temp, (err,data) => {
    if(!err) {
      console.log(data)
      res.send(data);
    }else {
      res.send({status:false})
    }
  })
//   MongoClient.connect(url.url,function(err, db){
//     db.collection('Graabo').findOne(temp, function(err,data){
//       if(!err) {
//           res.send(data);
//           db.close();
//         }else {
//           db.close();
//         }
//       })
// })
}
