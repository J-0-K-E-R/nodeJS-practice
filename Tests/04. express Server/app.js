var calc = require('./calc.js')
const express = require('express')

const app = express()
result = calc.add(4, 5)

console.log("Result is " + result + " " + calc.sub(4, 5) + " " + calc.mul(4, 5))

app.get('/', function(req, res){
    res.send('This is an Express server. ' + result)
})

app.get('/next', function(req, res){
    const id = req.query.id
    res.send('This is next page. ' + id)
    //res.send('\nID is ' + id)
})

app.get('/next/:id', function(req, res){
    res.send('This is page with id as ' + req.params.id + '.')
})

app.listen(8080, function(req, res){
    console.log('Express Server is running.')
})