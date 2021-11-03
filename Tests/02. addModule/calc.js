// function add(a, b) {
//     return a + b
// }

// function sub(a, b) {
//     return a - b
// }

// exports.mul = function mul(a, b) {
//     return a * b
// }


//module.exports.add = add
// exports.add = add
// exports.sub = sub

module.exports = {
    add: function(a, b) {
        return a+b
    },
    sub: function(a, b) {
        return a-b
    },
    mul: function(a, b) {
        return a*b
    },
    div: function(a, b) {
        if (b != 0)
            return a/b
    }
}