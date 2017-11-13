var XLSX = require('xlsx');
var fs = require ('fs');


exports.upoladCsv = function(req,res){  
    var uploadedFile = req.files.uploadedFile
    uploadedFile.mv('./uploads/filename.csv', function(err) {
      if (err){
        return res.status(500).send(err);
      } else {

        var workbook = XLSX.readFile('./uploads/filename.csv');
        var sheet_name_list = workbook.SheetNames;
        sheet_name_list.forEach(function(y) {
            var worksheet = workbook.Sheets[y];
            var headers = {};
            var data = [];
            for(z in worksheet) {
                if(z[0] === '!') continue;
                //parse out the column, row, and value
                var col = z.substring(0,1);
                var row = parseInt(z.substring(1));
                var value = worksheet[z].v;
        
                //store header names
                if(row == 1) {
                    headers[col] = value;
                    continue;
                }
        
                if(!data[row]) data[row]={};
                data[row][headers[col]] = value;
            }
            //drop those first two rows which are empty
            data.shift();
            data.shift();
            res.send(data);
            fs.unlink('./uploads/filename.csv')
      })
    
    }
})


}


exports.addCategory = (req,res) => {
    var MongoClient = require('mongodb').MongoClient;
    var url = require('./config')
    var element = req.body;
    MongoClient.connect(url.url,function(err, db){
            db.collection('Graabo').updateOne({"category":{$exists:true}},{ $push: { "category": {$each : req.body}} },function(err,data){
                db.collection('Graabo').find({"category":{$exists:true}}).toArray(function(err,categories){
                    res.send(categories);
                    db.close();
                })  
    })
    
})
}