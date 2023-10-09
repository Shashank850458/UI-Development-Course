
let customerlist =[
    {
        city:"Banglore",
        account:['suresh','Naaz','Alex']
    },
    {
        city:"Chennai",
        account:['Mohit','Mantu','Shayam','Alia']
    },
    {
        city:"Dehli",
        account:['Sandip','Mangu','Sunil','Sarda','Karthik']
    }


];
customerlist.map((customer,index)=>{
    console.log("#",index,customer.city,customer.account.length);

    customer.account.map((fullname,index2)=>{
        console.log("\t",index2,fullname);
    })
    console.log("\n");
})