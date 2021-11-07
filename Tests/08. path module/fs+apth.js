const fs = require('fs')
const path = require('path')

// Create folder
fs.mkdir(path.join(__dirname, '/test'), {}, err => {
    if (err) throw err;
    console.log('Folder created!')
})

    // Write/create file
fs.writeFile(path.join(__dirname, '/test', 'test.txt'), 'This is', err => {
if (err) throw err;
    console.log('File written!')

    // File append
    fs.appendFile(path.join(__dirname, '/test', 'test.txt'), ' NODE.JS', err => {
    if (err) throw err;
        console.log('File written!')
    })
})


// Rename file
// fs.rename(path.join(__dirname, '/test', 'test.txt'), path.join(__dirname, '/test', 'test2.txt'), err => {
//     if (err) throw err;
//     console.log('File renamed!')
// })