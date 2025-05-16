// var http = require("http")
// http.createServer(function(req,res){
//     res.end("<h1>Welcome to node js</h1>")
// }).listen(9890)

// console.log("Port listening at....... 9890")

var http = require("http")
const PORT = process.env.PORT || 9012
const app = http.createServer(function(req,res){
    res.end("<h1>Welcome to node js local to live</h1>")
})

app.listen(PORT,()=>{
    console.log(`Port listening at....... ${PORT}`)
})

