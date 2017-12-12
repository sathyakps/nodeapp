var mongoose = require('mongoose');
var autoIncrement = require('../server').autoInc;
var Schema = mongoose.Schema;

var TerminalSchema = new Schema({
  for : String,
  name: String,
  status :Boolean
});

var TaxSchema = new Schema({
  name: String,
  rate : Number,
  includeInPrice : Boolean,
  option:String,
  store: [String],
  status: Boolean
});

var StoreSchema = new Schema ({
  name : String,
  address: String,
  phone: Number,
  description : String,
  noPos: Number
})

var UserSchema = new Schema({
  _id: {type:Number},
  userName:  String,
  password: String,
  email:   String,
  storeName: [StoreSchema],
  mobileNumber:{type: Number, default:null },
  emailVerfied: {type: Boolean, default:false },
  mobileVerified: {type: Boolean, default:false },
  businessName: String,
  category:{type: String, default:null },
  payment: {type: [String], default:"Cash" },
  taxes: {type: [TaxSchema], default:null },
  terminal: {type: [TerminalSchema]},
  createdAt:{ type: Date, default: Date.now },
});

UserSchema.plugin(autoIncrement.plugin,{model:'User',field: '_id', startAt:1, incrementBy: 1})
exports.User  = mongoose.model('User', UserSchema,'Users');
