// const Person = require('./Person')
// const Logger = require('./logger')


// const logger = new Logger()
// const p1 = new Person('Howl', 30)

// logger.on('message', (data) => console.log('Called Listener', data))

// logger.log('Hello There!')
// p1.greeting()


const http = require('http')
const path = require('path')
const fs = require('fs')


const server = http.createServer((req, res) => {
    // if (req.url === '/') {
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
    //         if (err) throw err;
    //         res.writeHead(200, {"Content-Type": "text/html"})
    //         res.end(content)
    //     })
        
    // }

    // if (req.url === '/about') {
    //     fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
    //         if (err) throw err;
    //         res.writeHead(200, {"Content-Type": "text/html"})
    //         res.end(content)
    //     })
        
    // }

    // if (req.url === '/api/users') {
    //     const users = [
    //         {name: 'Bob', age: 20},
    //         {name: 'Josh', age:20}
    //     ]
    //     res.writeHead(200, {"Content-Type": "application/json"})
    //     res.end(JSON.stringify(users))
    // }

    // Build file path
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url)
    
    // Extension of file
    let extName = path.extname(filePath)

    // Initial content type
    let contentType = 'text/html'

    switch(extName) {
        case '.js':
            contentType = 'text/javascript'
            break
        case '.css':
            contentType = 'text/css'
            break
        case '.json':
            contentType = 'application/json'
            break
        case '.jpg':
            contentType = 'image/jpg'
            break
        case '.png':
            contentType = 'image/png'
            break
    }


    // Read file
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code == 'ENOENT') {
                // Page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                    res.writeHead(200, { 'Content-Type': 'text/html'})
                    res.end(content, 'utf8')
                })
            } else {
                // Some server error
                res.writeHead(500)
                res.end(`Server error: ${err.code}`)
            }
        } else {
            // success
            res.writeHead(200, { 'Content-Type': contentType})
            res.end(content, 'utf8')
        }
    })
})

const PORT = process.env.PORT || 8080

server.listen(PORT, () => console.log( `Server is running on port ${PORT}`))