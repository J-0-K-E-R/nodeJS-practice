console.log(__filename)
console.log(__dirname)

var i = 0;

function printStuff(){
    i++
    console.log("Check this out! " + i)
}

setTimeout(printStuff, 5000)    //Calls function after given time

setInterval(printStuff, 2000)   //Calls function after given interval