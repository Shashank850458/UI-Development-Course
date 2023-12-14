
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

app.listen(1111,function(){
    console.log("The Server is live....");
})

//http://localhost:1111/