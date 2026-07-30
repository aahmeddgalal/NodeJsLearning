const fs = require('fs');
const path = require('path') 

//start of fsPromesis
const fsPromises = require('fs').promises;

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8');
    console.log(data)

    await fsPromises.writeFile(path.join(__dirname, 'files', 'starter.txt'), data);
    await fsPromises.appendFile(path.join(__dirname, 'files', 'starter.txt'), '\n\nFUCK OFF');
    await fsPromises.rename(path.join(__dirname, 'files', 'starter.txt'), path.join(__dirname, 'files', 'newStarter.txt'));

    const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'newStarter.txt'), 'utf8');
    console.log(newData)
  } catch (err) {
    console.error(err)
  }
}

fileOps();
//end of fsPromisis

// fs.readFile('./files/starter.txt', 'utf8',(err, data) => {
//   if (err) throw err;
//   console.log(data); // instead of toString put the utf8 
// }) // these stuff are asynchronus 

// another way insted of hardcoding the file name (cuz the /, \ can make some problems in diff OSs), first  require path
// fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8',(err, data) => {
//   if (err) throw err;
//   console.log(data); // insted of toString put the utf8 
// }) // these stuff are asynchronus 


// fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), "This is what we're writing to the file", (err) => {
//   if (err) throw err;
//   console.log('Write Complete'); 

//   fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\n\n Hey FUCK OFF', (err) => {
//     if (err) throw err;
//     console.log('Append Complete')

//     fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'New Reply.txt'), (err) => {
//       if (err) throw err;
//       console.log('Rename Complete') 
//     } )
//   })
// })  // this way u can ensure that operations happens in your own order


// fs.appendFile(path.join(__dirname, 'files', 'test.txt'), " test", (err) => {
//   if (err) throw err;
//   console.log('Append Complete'); 
// })  //will add content to an existing file and also can create a file if not exist 

console.log('Hello...') 

// exit on uncaught errors. process is available in node 
process.on('uncaughtException', err => {
  console.error(`There was an uncaught error: ${err}`);
  process.exit(1);
}) 