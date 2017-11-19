var jwt=require('jsonwebtoken');
var MongoClient = require('mongodb').MongoClient;
var url = require('./config')

module.exports.authenticate = (req,res) => {
    var password = req.body.password;
    MongoClient.connect(url.url,function(err, db){
        console.log(err);
        db.collection('Users').find({email:req.body.email}).toArray(function(err,results){
            if (err) {
                res.json({
                  status:false,
                  message:'there are some error with query'
                  })
            }else{
              if(results.length >0){
                  if(password==results[0].password){
                      var token=jwt.sign({email:results[0].email},'graabo-protected',{
                          expiresIn:'1h'
                      });
                      res.json({
                          status:true,
                          token:token,
                          email: results[0].email,
                          name : results[0].name
                      })
                  }else{
                      res.json({
                        status:false,                  
                        message:"Email and password does not match"
                       });
                  }
               
              }
              else{
                res.json({
                    status:false,
                  message:"Email does not exits"
                });
              }
            }
          });
        })

}