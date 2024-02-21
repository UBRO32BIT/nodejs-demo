// local
const secret = 'John Xina'
// share
const userName = "Dam Vinh Hung";

const printName = (name) => {
    console.log(`Hello ${name}`);
}

// export default
module.exports = {userName, printName}

// magic- i mean alternative export method
module.exports.names = ['Do Nam Trung', 'Son Tung'];