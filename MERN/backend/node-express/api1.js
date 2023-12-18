
const express = require("express"); // calling express framework
const app = express();              // creating object of express
const cors = require("cors");      // calling cors origin library
app.use(cors());                  // creating object of cors library
app.use(express.json()); // injecting .json to send and receive data in json

app.get("/",function(req,res){
     res.send("<h1> Welcome to Node Express Api </h1>");
})

app.get("/book",function(req,res){
    let booklist = ['HTML','CSS','Bootstrap','Javascript','React','Node','Mongodb'];
    let jsondata = JSON.stringify(booklist);  // array to json
    res.send(jsondata);
});
//http://localhost:1111/book

app.get("/user",function(req,res){
    let userlist =[
        {name: 'Alex',age:'30 Years',city:'Banglore'},
        {name: 'Aman',age:'35 Years',city:'Manglore'},
        {name: 'Suman',age:'40 Years',city:'Pune'},
        {name: 'Raj',age:'45 Years',city:'Mysore'}
    ]
    let jsondata = JSON.stringify(userlist);
    res.send(jsondata);
})
//http://localhost:1111/user

app.get("/citylist",function(req,res){
    let city=['Banglore','Pune','Manglore','Mysore','Mumbai','patna'];
    let cityjson=JSON.stringify(city);
    res.send(cityjson);
})
//http://localhost:1111/citylist

app.get("/productlist",function(req,res){
    let product=['laptop','Mobile','Desktop','Tablet','Earphone'];
    let productjson =JSON.stringify(product);
    res.send(productjson);
})
//http://localhost:1111/productlist

app.get("/customer",function(req,res){
    let allcustomer =[
        {name:"Ganesh",mobile:999999999,age:"30",city:"Banglore",edu:"MCA"},
        {name:"Mahesh",mobile:888888888,age:"31",city:"Manglore",edu:"BCA"},
        {name:"Suresh",mobile:777777777,age:"32",city:"Pune",edu:"BSC"},
        {name:"Denesh",mobile:666666666,age:"33",city:"Kolkata",edu:"BCOM"},
        {name:"Vighesh",mobile:555555555,age:"34",city:"Mumbai",edu:"MCOM"}
    ];
    let jsondata = JSON.stringify(allcustomer);
    res.send(jsondata);
});
//http://localhost:1111/customer



app.listen(1111,function(){
    console.log("The Server is live....");
})

//http://localhost:1111/