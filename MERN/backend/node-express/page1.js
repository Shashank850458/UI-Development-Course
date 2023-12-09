
let http= require("http");

http.createServer(function(req, res) {
    res.writeHead(200,{'content-type': 'text/html'});

    res.write("<h1> Welcome to node</h1>");
    res.write("<h2>This is node xyz</h2>");
    res.write("<p> Working well </p>");
    

    res.end();
}).listen(1234);

// http://localhost:1234
