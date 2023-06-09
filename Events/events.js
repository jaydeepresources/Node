var events = require('events');
var eventEmitter = new events.EventEmitter();

// listener #1
var sender = function sender() {
    console.log('sending executed.');
}

// listener #2
var receiver = function receiver() {
    console.log('receiving executed.');
}

// Bind the transmission event with the sender function
eventEmitter.addListener('transmission', sender);

// Bind the transmission event with the receiver function
eventEmitter.on('transmission', receiver);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'transmission');
console.log(eventListeners + " Listeners listening to transmission event");

// Fire the transmission event 
eventEmitter.emit('transmission');

// Remove the binding of sender function
eventEmitter.removeListener('transmission', sender);
console.log("sender will not listen now.");

// Fire the transmission event 
eventEmitter.emit('transmission');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'transmission');
console.log(eventListeners + " Listener listening to transmission event");

console.log("Program Ended.");