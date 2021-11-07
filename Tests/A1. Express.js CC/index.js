const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const members = require('./Members')
const logger = require('./middleware/logger')


const app = express()



// init middleware
//app.use(logger)

// Handlebars Middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// Body parser Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

// Homepage route
app.get('/', (req, res) => res.render('index',{
    title: 'Member App',
    members
}))


// Set static folder
app.use(express.static(path.join(__dirname, 'public')))

// Members API routes
app.use('/api/members', require('./routes/api/members.js'))

const PORT = process.env.PORT || 8080

app.listen(PORT, () => console.log(`Server started at port ${PORT}`))