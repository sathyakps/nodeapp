var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var fileUpload = require('express-fileupload');
var jwt= require("jsonwebtoken");
var router=express.Router();
var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment')
process.env.SECRET_KEY="thisismysecretkey";





var app = express();
app.use(function (req, res, next) {
      // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
       res.setHeader('Access-Control-Allow-Origin', 'https://sathya-pos.herokuapp.com');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
      res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,token');
    // res.setHeader("X-ACCESS_TOKEN", "Access-Control-Allow-Origin", "Authorization", "Origin", "x-requested-with", "Content-Type", "Content-Range", "Content-Disposition", "Content-Description");
      res.setHeader('Access-Control-Allow-Credentials', true);
      next();
  });
app.use(logger('dev'));
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(fileUpload());


var config = require('./config')

mongoose.connect(config.url, { useMongoClient: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
autoIncrement.initialize(db)
exports.autoInc = autoIncrement;


var User = require('./schema/users');
var category = require('./controllers/category')
var product = require ('./controllers/product')
var data = require ('./controllers/allData')
var upload = require ('./controllers/upload')
var authenticate = require('./authentication/authenticate');
var register = require ('./controllers/register.js')
var reports = require('./controllers/reports')
var generalSettings = require ('./controllers/settings/general.js')
var paymentSettings =  require ('./controllers/settings/payment.js')
var taxSettings = require('./controllers/settings/taxes');
var storeSettings = require ('./controllers/settings/store.js')
var posSettings = require('./controllers/settings/pos')

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
 console.log('connected to mongoose db')
});

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

router.use((req,res,next)=> {
  var token=req.body.token || req.headers['token'];
  var email =jwt.decode(token).email;
  User.User.findOne({email:email},(err,users) => {
    res.locals.user = users;
    next()
  });
});

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


router.get('/generalsettings',generalSettings.getGeneralData);
router.post('/setgeneraldata',generalSettings.setGeneralData);


router.get('/getpayment', paymentSettings.getPaymentTypes)
router.post('/setpayment', paymentSettings.setPaymentTypes);

router.get('/gettaxes', taxSettings.getTaxes);
router.post('/settaxes', taxSettings.setTaxes);

router.get('/getstores',storeSettings.getStores);
router.post('/setstores',storeSettings.setStores);


router.get('/getpos',posSettings.getPOS);
router.post('/setpos',posSettings.setPOS);
router.post('/deletepos', posSettings.deletePOS)
router.post('/updatepos', posSettings.updatePOS)



router.get('/data',data.getData);

app.post('/login',authenticate.authenticate);
app.post('/register',register.checkUniqueUser,register.registerUser)
// app.post('/register',register.registerUser);







app.listen(3000,function(){
  console.log('Server Started. App Listening at port 3000')
})
