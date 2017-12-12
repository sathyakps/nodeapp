var MongoClient = require('mongodb').MongoClient;
var url = require('./../config')

exports.getDashboardData = function(req,res){
  MongoClient.connect(url.url,function(err, db){
        db.collection('ORDER_ENTITY').aggregate([
          { $match:{ $and: [{"dateTime":{ $gte : new Date(req.body.startDate) }},{"dateTime":{ $lte : new Date(req.body.endDate) }} ]  }},
          {$group:{
                    _id:null,
                    noSales:{$sum:1},
                    salesAmount:{$sum:"$grossAmount"}}
          }
        ]).toArray(function(err,allData){
          res.send(allData);
          db.close();
        })
      })
}


exports.getSalesSummary = function(req,res){
MongoClient.connect(url.url,function(err, db){
      db.collection('ORDER_ENTITY').aggregate([
        { $match:{ $and: [{"dateTime":{ $gte : new Date(req.body.startDate) }},{"dateTime":{ $lte : new Date(req.body.endDate) }} ]  }},
        {$project:
          {      indianDate:{ $add: [ "$dateTime", 19800000 ] },
                 dateTime: "$dateTime",
                 grossAmount: "$grossAmount",
                 taxAmount: "$taxAmount",
                 totalAmount: {$sum:["$grossAmount","$taxAmount"]}
          }
      },
      { $project:
          {
              date:{$dateToString: {format:"%Y-%m-%d",date:"$indianDate"}},
              dateTime: "$dateTime",
              grossAmount: "$grossAmount",
              taxAmount: "$taxAmount",
              totalAmount: {$sum:["$grossAmount","$taxAmount"]}
          }
       },
       {
           $group:
           {
               _id:"$date",
               noSales : {$sum:1},
               grossAmount: {$sum:"$grossAmount"},
               taxAmount: {$sum:"$taxAmount"},
               totalAmount: {$avg:"$totalAmount"}


           }
       },
       { $sort: { _id: -1 } }
      ]).toArray(function(err,allData){
        res.send(allData);
        db.close();
      })
    })
}


exports.getSalesBy = function(req,res){
  var viewBy = '$'+req.params.viewBy;
  MongoClient.connect(url.url,function(err, db){
        db.collection('ORDER_ITEM_ENTITY').aggregate([
          { $match:{ $and: [{"dateTime":{ $gte : new Date(req.body.startDate) }},{"dateTime":{ $lte : new Date(req.body.endDate) }} ]  }},
          { $group:{
                  _id:viewBy,
                  noSales:{$sum:1},
                  salesAmount:{$sum:"$grossAmount"},
                  taxAmount:{$sum:"$taxAmount"},
                  totalAmount: {$sum:"$totalAmount"},
                  qty:{$sum:"$qty"}
                  }
          }
        ]).toArray(function(err,allData){
          res.send(allData);
          db.close();
        })
      })
}


exports.getHourlySales = function(req,res){
  MongoClient.connect(url.url,function(err, db){
        db.collection('ORDER_ENTITY').aggregate([
          { $match:{ $and: [{"dateTime":{ $gte : new Date(req.body.startDate) }},{"dateTime":{ $lte : new Date(req.body.endDate) }} ]  }},
          {$project:
            {      indianTime:{ $add: [ "$dateTime", 19800000 ] },
                   dateTime: "$dateTime",
                   grossAmount: "$grossAmount",
                   taxAmount: "$taxAmount",
                   totalAmount: {$sum:["$grossAmount","$taxAmount"]}
            }
        },
        { $project:
            {
                time:{$dateToString: {format:"%H",date:"$indianTime"}},
                dateTime: "$dateTime",
                grossAmount: "$grossAmount",
                taxAmount: "$taxAmount",
                totalAmount: {$sum:["$grossAmount","$taxAmount"]}
            }
         },
         {
             $group:
             {
                 _id:"$time",
                 noSales : {$sum:1},
                 grossAmount: {$sum:"$grossAmount"},
                 taxAmount: {$sum:"$taxAmount"},
                 totalAmount: {$sum:"$totalAmount"}


             }
         },
         { $sort: { _id: 1 } }
        ]).toArray(function(err,allData){
          res.send(allData);
          db.close();
        })
      })
}


exports.getSalesFeed = function(req,res){
  MongoClient.connect(url.url,function(err, db){
        db.collection('ORDER_ENTITY').find(
          {$and : [{"dateTime":{ $gte : new Date(req.body.startDate) }},{"dateTime":{ $lte : new Date(req.body.endDate) }} ] }
        ).toArray(function(err,allData){
          res.send(allData);
          db.close();
        })
      })
}
