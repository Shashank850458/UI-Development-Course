const express = require('express');
const router = express.Router();
module.exports =router;

const User =require("./userschema");

router.get("/",async(req,res) => {
    let alluser = await User.find();
    res.status(200).json(alluser);
});

router.post("/",async(req,res) => {
    let newuser =await  User({
        fullname:req.body.n,
        mobile:req.body.m,
        email: req.body.e,
        address:req.body.a
    });

    await newuser.save();

    let msg={"message":"New user created successfully!..."};
    res.status(201).json(msg);
});


router.delete("/:id",async(req,res)=>{
    let userid =req.params.id;
    let userinfo = await User.findById(userid);
    if(userinfo==null)
    {
        res.status(201).json({"msg":"Invalid user id"});
    }else{
        await userinfo.deleteOne();
        res.status(201).json({"msg":"Record deleted successully..."});
    }
});


router.put("/",async(req,res)=>{
     let userid =req.body.id;
     let userinfo =await User.findById(userid);
     if(userinfo==null)
     {
        res.status(201).json({"msg":"Invalid Request"})
     }else{
        userinfo.fullname=req.body.n;
        userinfo.mobile=req.body.m;
        userinfo.email= req.body.e;
        userinfo.address=req.body.a;
        await userinfo.save();
        res.status(200).json({"msg":"Record updated successfully"});

     }
})



