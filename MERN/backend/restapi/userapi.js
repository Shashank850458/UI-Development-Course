const express = require('express');
const router = express.Router();
module.exports =router;

const User =require("./userschema");

router.get("/",(req,res) => {
    let msg={"message":"The Get api is working..."};
    res.status(200).json(msg);
});

router.post("/",(req,res) => {
    let msg={"message":"The Post api is working..."};
    res.status(201).json(msg);
});



