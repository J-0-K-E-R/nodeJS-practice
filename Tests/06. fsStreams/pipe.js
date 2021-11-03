var fs = require('fs')
var readableStream = fs.createReadStream('temp.txt')
var writeableStream = fs.createWriteStream('out.txt')

readableStream.pipe(writeableStream)

// We can directly write the data using pipes without managing it inbetween.