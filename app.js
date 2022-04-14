const {counter,adder, pi} = require('./stuff')


console.log(counter(['chelsea', 'ATM', 'CAM']))
console.log(adder(8,9 * pi))

var events = require('events')


var myEmitter = new events.EventEmitter()

myEmitter.on('someEvent', function(mssg){
  console.log(mssg)
})

myEmitter.emit('someEvent', 'the event was emitted')
