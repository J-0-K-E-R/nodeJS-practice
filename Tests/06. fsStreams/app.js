var fs = require('fs')
var readableStream = fs.createReadStream('temp.txt')

// readbleStream reads data in chunks. It's advised to use this as files could be large in size.
var data = ''
readableStream.setEncoding('UTF8')
readableStream.on('data', function(chunk) {
    data += chunk
})


// Streams emit events, so we can use them as async events and exec will not be blocked.
readableStream.on('end', function() {
    console.log(data)
})


var writeData = 'Writing using fsStreams'
var writeableStream = fs.createWriteStream('output.txt')
writeableStream.write(writeData, 'UTF8')
writeableStream.end()
writeableStream.on('finish', function() {
    console.log('Write completed!')
})