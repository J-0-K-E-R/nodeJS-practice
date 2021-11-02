// Create a Simple Server


var http = require('http')


http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'Text/HTML'})
    // res.write("Fuck!!!! It WORKED!!!")
    // res.end()
    res.end("Fuck!!!! It WORKED!!!")
}).listen(8080)