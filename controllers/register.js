var MongoClient = require('mongodb').MongoClient;
var url = require('./../config')
var User = require('../schema/users').User

exports.getUsers = function(req,res){
  MongoClient.connect(url.url,function(err, db){
        db.collection('Users').find().toArray(function(err,allData){
          res.send(allData);
          db.close();
        })
      })
}



exports.registerUser = (req,res) => {
  var user = req.body;
  user['terminal'] = { for : user.businessName,name:'Terminal 1',status:true};
  user['storeName'] = [{name:user['businessName'],address:null,phone:null,description:null,noPos:1}];
  var newUser = new User(user);
  newUser.save(function (err) {
    if (err) {
      console.log(err);
      res.json({"status":false,"message":" Registered Failed"});
    } else {
      res.json({"status":true,"message":"User Registered Succesfully"});
    }
  });
}


exports.checkUniqueUser = (req,res,next) => {
    User.find((err,users)=> {
      var uniqueUser = true;
      var totalUserCount = users.length;
      var counter =0;
      if(users.length> 0) {
        users.forEach(element => {
          counter ++;
          if(element.email === req.body.email) {
            uniqueUser = false
            res.status(200).send({status:'duplicateEmail',message:"Email Already Registered"});
            res.end();
          }
          if(uniqueUser && counter === totalUserCount){
            next()
          }
        });
      } else {
        next()
      }
    })
}


// exports.setUniqueCollectionName = (req,res,next) => {
//   var allCollection =  res.locals.allCollection
//   if (allCollection.indexOf(req.body.businessName) === -1) {
//     req.body['dataCollection'] = req.body.businessName;
//   }else {

//   }
// }

