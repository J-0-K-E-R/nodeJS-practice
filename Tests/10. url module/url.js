const url = require('url')

const myURL =  new URL('https://mysite.com/home.html?is=101&status=active')


// Serialized URL
console.log(myURL.href)
console.log(myURL.toString())


// Host (root domain)
console.log(myURL.host)


// Hostname (no port)
console.log(myURL.hostname)


// Pathname
console.log(myURL.pathname)


// Serialized query
console.log(myURL.search)


// Param object
console.log(myURL.searchParams)


// Add param
myURL.searchParams.append('a1', '123')
console.log(myURL.searchParams)

// Loop through params
myURL.searchParams.forEach((value, name) => console.log(`${name}: ${value}`))

