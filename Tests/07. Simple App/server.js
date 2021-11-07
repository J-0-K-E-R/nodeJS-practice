var http = require('http')
var url = require('url')

function startServer(route, handle) {
//     function initial (req, res) {
//         console.log('Request received')
//         res.writeHead(200, {"Content-Type": "text/plain"})
//         res.write("Hello User")
//         res.end()
//         console.log('Request completed')
//     }

    function onRequest (req, res) {
        var reviewData = '';
        var pathname = url.parse(req.url).pathname
        console.log('Request received for ' + pathname)
        //route(handle, pathname, res)
        //res.writeHead(200, {"Content-Type": "text/plain"})
        // res.write("Hello User")
        // res.end()
        // console.log('Request completed')

        req.setEncoding("utf8")
        req.addListener("data", function(chunk) {
            reviewData += chunk
        })

        req.addListener("end", function() {
            route(handle, pathname, res, reviewData)
        })
        
    }

    http.createServer(onRequest).listen(8080)

    console.log('Server started on port 8080')
}

exports.startServer = startServer