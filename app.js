const fs = require('fs')

let readMe = fs.readFileSync('reading.txt', 'utf8')
fs.writeFileSync('math.csv', readMe)

//code

console.log(readMe + '<>')
