const express = require('express');
const router = express.Router();
module.exports =router;

const Book =require("./bookschema");

router.get("/",async(req,res)=>{
    let booklist =await Book.find();
    res.status(200).json(booklist);
});

router.post("/",async(req,res)=>{
    let newbook = await Book({
        bookname: req.body.bname,
        price:req.body.bprice,
        author: req.body.bauthor,
        stock:req.body.bstock
    });
    await newbook.save();
    res.status(200).json({"message":req.body.bname + " Saved successfully"});

})


router.delete("/:id",async(req,res)=>{
    let bookid =req.params.id;
    let bookinfo = await Book.findById(bookid);
    if(bookinfo == null)
    {
        res.status(200).json({"message":"Invalid Request"});
    }else{
        await bookinfo.deleteOne();
        res.status(200).json({"message":"Record Deleted Successfully"});
    }
})