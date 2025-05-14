var http = require("http")

http.createServer(function(req,res){
    res.end("<h1>Welcome to node js</h1>")
}).listen(9890)

console.log("Port listening at....... 9890")