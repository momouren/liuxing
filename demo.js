const http = require("http");

let server = http.createServer((req,res)=>{

    res.write("hhh")
    res.end("hello,world")
})

server.on("request",(req,res)=>{
    console.log("hello,world")
})
server.on("close",()=>{
    console.log("服务器关闭了..")
})
server.listen(8080);