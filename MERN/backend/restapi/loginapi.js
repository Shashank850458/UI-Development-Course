const express = require('express');
const router = express.Router();
module.exports =router;

const Adminlogin = require('./loginschema');

router.post("/",async(req,res) => {
    let email = req.body.email;
    let password = req.body.password;

    let data={"email": email, "password": password};
    let info=await Adminlogin.findOne( data );
    res.status(200).json(info);
    

    
})
