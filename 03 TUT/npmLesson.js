// We installed nodemon package =>> npm i nodemon -g
// console.log('testing!')

// to install a package locally 
// npm init =>> npm init and answer the questions or you can just write...
// npm init -y
// after that to downlad a package as a dependancy on the package.json file use =>>
// npm i date-fns ==> date-fns stands for date functions and it will be in the node_modules folder


const { format } = require('date-fns')
const { v4: uuid } = require('uuid')

console.log(format(new Date(), 'yyyyMMdd\tHH:mm:ss')) 
console.log("hello")
console.log(uuid())
console.log(uuid())


// now nodemon is saved as a global package but we want to add it as a devDependancy
// npm i nodemon --save-dev OR npm i nodemon -D