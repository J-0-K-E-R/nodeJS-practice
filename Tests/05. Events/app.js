var events = require('events')

var eventEmmitter = new events.EventEmitter()

// eventEmitter.on needs to be above the emit events
eventEmmitter.on('done', function(message) {
    console.log(message)
})

var notify = function(){
    console.log("Event triggered")
    eventEmmitter.emit('done', 'Working on it.\n')
}

eventEmmitter.on('trigger', notify)
eventEmmitter.emit('trigger')


eventEmmitter.emit('done', 'We are done here.')