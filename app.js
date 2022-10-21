//server creation

const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end("welcome to the page");
        return;
    }
    if(req.url==='/about'){
        res.end("this is about page");
        return
    }
    res.end(`<h1>Oops</h1>
    <a href='/'>back home</a>`);

});

server.listen(5000);