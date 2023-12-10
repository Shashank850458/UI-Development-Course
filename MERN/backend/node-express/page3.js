 
 let http = require('http');

 http.createServer((req,res)=>{
    res.writeHead(200,{'content-type': 'text/json'});
    
    let booklist =['HTML','CSS','NODE','EXPRESS','PHP','javascript','React'];
    let bookjson = JSON.stringify(booklist); // Array to json
    res.write(bookjson);
    res.end();

 }).listen(1234);