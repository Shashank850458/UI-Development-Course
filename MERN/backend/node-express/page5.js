let http = require('http');

http.createServer((req, res) => {
    res.writeHead(200,{'content-type': 'text/json'});

    let booklist =[
       {name:"HTML",price:300,author:"alex"},
       {name:"CSS",price:400,author:"Sumit"},
       {name:"React",price:500,author:"Raj"},
       {name:"Angular",price:600,author:"Jhon"}
    ];
    let jsondata =JSON.stringify(booklist);
    res.write(jsondata);
   
    res.end();
}).listen(1234);

