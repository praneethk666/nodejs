const express = require('express');
const router = express.Router();
const User = require("../dbmodel/user");
router.get("/user",function(req,res){
  User.find({}).then(function(user){
    res.send(user);
  })

});
router.delete("/user/delete/:name",function(req,res){
  User.findOneAndDelete({_name:req.params.name}).then(function(user){
      res.send(user);
    });
  });
router.post("/user/postie",function(req,res){
  User.create(req.body).then(function(user){
    res.send(user);
    })
  });

module.exports=router;