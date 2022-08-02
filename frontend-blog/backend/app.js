const express = require('express');
const app = express();
const mongoose = require('mongoose')
const User=require('../model/user')  //--- video-28
var bodyPraser=require('body-parser')   //---- video-31
var jsonParser=bodyPraser.json();  

// const bcrypt = require('bcrypt')    //---- video-31
// var crypto=require('crypto');  //---- video-36
// var key="address";     //---- video-36
// var algo='aes-256-ctr';     //---- video-36
// const jwt=require('jsonwebtoken')     //------ video-37
// jwtKey="jwt";     //------ video-37
const port = process.env.PORT || 8800;
mongoose.connect("mongodb+srv://avenger:m86Ycrc7BSeFnCU@cluster0.igb3o.mongodb.net/tutorial?retryWrites=true&w=majority",
{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(()=>{
  console.warn("connected")
})

// function checkEmail(req,res,next){
//   var email=req.body.email;
//   var checkexitemail=User.findOne({email:email});
//   checkexitemail.exec((err,data)=>{
//        if(err) throw err;
//        if(data){
//           return res.status(200).json({
//             msg:"Email Already Exits",
//             results:data
//            });
//        }
//      next();
//    });
// }





app.post('/register',jsonParser, function(req, res) {
 
    // bcrypt.hash(req.body.Password, 10, function(err, hash) {
   
    //   if(err){
    //      res.status(400).json({
    //           msg:"Something Wrong, Try Later!",
    //           results:err
    //      });
    //   }else{
        var userDetails = new User({
          _id:new mongoose.Types.ObjectId(),
           name: req.body.name,
           email: req.body.email,
           password: req.body.password,
           role:'Author'
           
       });
   
        userDetails.save().then(resResult=>{
           res.status(201).json({
           msg:"Inserted Successfully",
           results:resResult
           });
        }).catch(err=>{
             res.json(err);
          });
      // }
  });
  // });


 


  app.post("/login",function(req,res){

    var email=req.body.Email;
    User.find({email:email})
    .exec()
    .then(user=>{
        if(user.length<1){
            res.status(200).json({
              msg:"Auth Failed",
              UserData:'',
              status:'error'
            });
        }else{
            bcrypt.compare(req.body.password, user[0].password, function(err, result) {
               if(err){
                res.json({
                  msg:"Auth Failed",
                  UserData:'',
                  status:'error'
                });
               }
               if(result){
                  res.status(200).json({
                    msg:"User Login Successfully",
                    UserData:user,
                    status:'success'
                  });
               }else{
                  res.json({
                     msg:"Auth Failed",
                     UserData:'',
                     status:'error'
                  });
               }
            });
        
        }
    }).catch(err=>{
        res.json({
            error:err
        });
    })
});
app.use('/',router);
app.listen(port )

