const EventEmmitter = require('events')

class MyEmitter extends EventEmmitter {}


const myEmitter = new MyEmitter();

// Event listener
myEmitter.on('event', () => console.log('Event fired!'))

// init event
myEmitter.emit('event')
myEmitter.emit('event')
myEmitter.emit('event')
myEmitter.emit('event')
