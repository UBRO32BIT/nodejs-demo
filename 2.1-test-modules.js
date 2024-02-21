// Get the modules exported
const test = require('./2-modules')

const userName = test.userName
const printName = test.printName

// Will get undefined
//const secret = test.secret

console.log(test)

printName("Cossete");
printName(userName);

// Loop through the array to print name
test.names.forEach((name) => {
    printName(name);
});