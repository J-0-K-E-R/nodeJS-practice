var fs = require('fs')
var calc = require('./calc.js')

result = calc.add(4, 5)

console.log("Result is " + result + " " + calc.sub(4, 5) + " " + calc.mul(4, 5))

fs.readFile('calc.js', 'utf-8', function(err, data){
    console.log(data)
})

fs.writeFile('temp.txt', 'HERE WE GO!', function(err){
    console.log("Write done!")
})

fs.appendFile('temp.txt', '\nHERE WE GO again!', function(err){
    console.log("Append done!")
})


fs.writeFile('temp2.txt', 'TEMP', function(err){
    console.log("TEMP Write done!")
})

fs.unlink('temp2.txt', function(err){
    console.log("TEMP delete done!")
})