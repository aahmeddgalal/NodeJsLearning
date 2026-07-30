const fs = require('fs')
const rs = fs.createReadStream('./files/lorem.txt', {encoding: 'utf8'}); // use the path if u want
const ws = fs.createWriteStream('./files/new-lorem.txt');

// rs.on('data', (dataChunk) => {
//   ws.write(dataChunk);
// }) // There's a better way

rs.pipe(ws)