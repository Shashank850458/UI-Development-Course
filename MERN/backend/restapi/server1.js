const express = require("express");  // calling express framework
const app = express();              // creating object of express
const cors = require("cors");      // calling cors origin library
app.use(cors());                  // creating object of cors library
app.use(express.json()); // injecting .json to send and receive data in json format


// db connection 
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/mymern10", {UseNewUrlParser:true})
const db = mongoose.connection;

db.on("error", (error)=>console("Error in database connection"));
db.on("open", ()=>console.log("Database is Connected..."));

const User = require("./userapi");

app.use("/myuser",User); //http://localhost:2222/myuser - GET,POST, PATCH,DELETE,PUT

app.listen(2222, ()=>console.log("The Server is Live Now..."));