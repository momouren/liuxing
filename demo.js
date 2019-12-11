const http = require("http");

let server = http.createServer((req,res)=>{

    res.write("hhh")
    res.end("hello,world")
})

server.on("request",(req,res)=>{
    console.log("hello,world")
})
server.listen(8080);