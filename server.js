var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var fileUpload = require('express-fileupload');
var jwt= require("jsonwebtoken");
var router=express.Router();

process.env.SECRET_KEY="thisismysecretkey";

var app = express();
app.use(function (req, res, next) {
      res.setHeader('Access-Control-Allow-Origin', 'https://sathya-pos.herokuapp.com, http://sathya-pos.herokuapp.com');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
      res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,token');
    // res.setHeader("X-ACCESS_TOKEN", "Access-Control-Allow-Origin", "Authorization", "Origin", "x-requested-with", "Content-Type", "Content-Range", "Content-Disposition", "Content-Description");
      res.setHeader('Access-Control-Allow-Credentials', true);
      next();
  });
app.use(logger('dev'));
// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json());
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(fileUpload());


var category = require('./category')
var product = require ('./product')
var data = require ('./allData')
var upload = require ('./upload')
var authenticate = require('./authenticate');
var register = require ('./register.js')
var reports = require('./reports')

router.use(function(req,res,next){
  var token=req.body.token || req.headers['token'];
  if(token){
      jwt.verify(token,'graabo-protected',function(err,ress){
          if(err){
              res.status(500).send('Token Invalid');
          }else{
              next();
          }
      })
  }else{
      res.send('Please send a token');
  }
})

app.use('/protected',router);

router.get('/getcategory',category.getCategory);
router.post('/addcategory',category.addCategory);


router.post('/csvupload',upload.upoladCsv);
router.post('/addcategories', upload.addCategory);


router.post('/addproduct/:category',product.addProduct)
router.get('/getproducts/:category',product.getProductByCategory)


router.post('/getdashboarddata', reports.getDashboardData);
router.post('/getsalessummary', reports.getSalesSummary);
router.post('/getsalesby/:viewBy', reports.getSalesBy); 
router.post('/gethourly', reports.getHourlySales);
router.post('/getsalesfeed',reports.getSalesFeed);


router.get('/data',data.getData);

app.post('/login',authenticate.authenticate);
app.post('/register',register.registerUser)



app.use(express.static(__dirname + '/dist'));
app.get('/', (req,res) => {
      res.sendFile(__dirname + '/dist/index.html')
})


app.listen(process.env.PORT,function(){
  console.log('Server Started. App Listening at port 3000')
})
