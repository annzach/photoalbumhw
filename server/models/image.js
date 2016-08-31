const BUCKET_NAME = 'reena-aws-bucket';
const AWS_URL_BASE ='https://s3-us-west-2.amazonaws.com';

const mongoose = require('mongoose');
const AWS = require('aws-sdk');
const uuid = require('uuid');
const path =require('path');
const s3 = new AWS.S3();

const imageSchema = new mongoose.Schema({
  name:{type:String, required:true},
  url:{type:String, required:true},
  createdAt:{type:Date, default:Date.now},
  Key:{type:String, required:true}
})

imageSchema.statics.upload = function(fileObj,cb){

  let {originalname,buffer} = fileObj;
  let ext = path.extname(originalname);
  let Key = uuid()+ext;

  let params = {
   Bucket:BUCKET_NAME,
   Key,
   ACL:'public-read',
   Body:buffer
  };

  s3.putObject(params,(err,result)=>{
   if(err) return cb(err);
  let url = `${AWS_URL_BASE}/${BUCKET_NAME}/${Key}`;

  this.create({name:originalname,url,Key},cb);
  });
};

imageSchema.statics.delete = function(Key,cb){

var params = {
  Bucket: BUCKET_NAME, 
  Key,

};
s3.deleteObject(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else   Image.remove({Key},cb);
});
};


const Image = mongoose.model('Image',imageSchema);
module.exports = Image;