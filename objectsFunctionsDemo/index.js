const objects = require('./objects.js')

// console.log(objects.myRoom.toggleLights())

const {myRoom} = objects
// const myRoom = objects.myRoom

// console.log(myRoom.toggleLights())

// console.log(myRoom.paintColor)
// console.log(myRoom["paintColor"])


//myKey contains the value of the key. 
//We access this value through bracket notation
const object = 'couch'
let myKey = object + 'Color'

console.log(myRoom[myKey])

myKey = 'paint' + 'Color'

console.log(myRoom[myKey])


