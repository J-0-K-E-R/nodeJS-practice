const EventEmmitter = require('events')
const uuid = require('uuid')

class Logger extends EventEmmitter {
    log(msg) {
        // Call event
        this.emit('message', {id: uuid.v4(), msg})
    }
}

module.exports = Logger