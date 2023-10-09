
let customerlist =[
    {
        city:"Banglore",
        account:[
            {name:"Raj",age:"30 years",edu:"MCA"},
            {name:"Monoj",age:"32 years",edu:"MA"}
        ]
    },
    {
        city:"Chennai",
        account:[
            {name:"Suman Jee",age:"43 years",edu:"Bcom"}
        ]
    },
    {
        city:"Dehli",
        account:[
             {name:"Amit",age:"44 years",edu:"Bcom"},
             {name:"Lokesh",age:"41 years",edu:"MCA"},
             {name:"Sunil",age:"46 years",edu:"BCA"}
             
            ]
    }


];

customerlist.map((customer,index)=>{
    console.log("#",index,customer.city,customer.account.length);

    customer.account.map((user,index2)=>{
        console.log("\t",index2,user.name,user.age,user.edu);
    })
    console.log("\n");
})