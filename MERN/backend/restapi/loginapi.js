const express = require('express');
const router = express.Router();
module.exports =router;

const Adminlogin = require('./loginschema');

router.post("/",async(req,res) => {
    let email = req.body.email;
    let password = req.body.password;

    let data={"email": email, "password": password};
    let info=await Adminlogin.findOne(data);

    if(info==null){
        let message = {"status":"FAIL"};
        res.status(200).json(message);
    }else{
        res.status(200).json(info);
    }

    
})
