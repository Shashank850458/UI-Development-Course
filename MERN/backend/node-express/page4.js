let http= require('http');
 
http.createServer((req,res) => {
     res.writeHead(200,{'content-type': 'text/html'});

     let booklist =[
        {name:"HTML",price:300,author:"alex"},
        {name:"CSS",price:400,author:"Sumit"},
        {name:"React",price:500,author:"Raj"},
        {name:"Angular",price:600,author:"Jhon"}
     ];
     res.write("<h1>Book List:"+ booklist.length +"</h1>");
     res.write("<table cellpadding='15' cellspacing='0' border='1' bordercolor='red'>");
     booklist.map((book,index) => {
        res.write("<tr>");
        res.write("<td>"+ index +"</td>")
        res.write("<td>" + book.name +"</td>");
        res.write("<td>" + book.price +"</td>");
        res.write("<td>" + book.author +"</td>");
        res.write("</tr>");
     })
     res.write("</table>");
     res.end();
}).listen(1234);