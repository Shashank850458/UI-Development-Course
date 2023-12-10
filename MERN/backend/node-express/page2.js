let http= require('http');

http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type': 'text/html'});

    res.write("<h1>Mange Books</h1>")

    let booklist =['HTML','CSS','NODE','EXPRESS','PHP','javascript','React'];

    booklist.map((bookname,index)=>{
        res.write("<p>" +  bookname + "</p>");
    });

    res.end();

}).listen(1234); // http//localhost:1234