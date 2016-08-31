const express = require('express');
const fs = require('fs');
const multer = require('multer');
const path = require('path')

const Image = require('../models/image')

const upload = multer({storage:multer.memoryStorage() });

const router = express.Router();



router.get('/',(req,res)=>{
  Image.find({},(err,images)=>{
    res.status(err?400:200).send(err||images);
  })
})

router.post('/',upload.single('image'),(req,res)=> {
  Image.upload(req.file,(err,image)=>{
 

    res.status(err?400:200).send(err||image);
  });
 });
 

 router.delete('/:Key',(req,res)=>{
  Image.delete(req.params.Key, err=>{
    if(err)
      res.status(400).send(err||'img not found');
    else
      res.send();
  })
 })

module.exports = router;



