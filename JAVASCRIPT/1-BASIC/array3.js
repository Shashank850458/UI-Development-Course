
//array of object
let userlist = [
    {fullName: "Alex",age:"30 years",edu:"MCA",city:"pune"},
    {fullName: "Sunil",age:"31 years",edu:"BCA",city:"Banglore"},
    {fullName: "Mahesh",age:"32 years",edu:"MA",city:"Dehli"},
    {fullName: "sumuk",age:"33 years",edu:"MBA",city:"Chennai"}
    
];
console.log("Total users:",userlist.length);
userlist.map((user,index)=>{
    console.log(user.fullName,user.age,user.edu,user.city);
    console.log("----------------------------------");
});