//global No window object in node.js means no build in fetch()

//__dirname - path to current directory
//__filename - filename
//require - function to uuse modules (commonJs)
//module - info about current module (file)
//process - info about env where the program is being executed

//modules -encapsulatedd code (only share minimum)
//when you execute a function e.g in ming-grenade.js file even though you did not export it all assign the module(file) to a variable in the file that you imported it the module(file) will still run

//built in os module in node hence do not need './'
const os = require('os')
require('./mind-grenade')
console.log('hi');

//info abour current user
const user = os.userInfo();
console.log(user);

//method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`);

const currentOs ={
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOs)

//Fs module synchronous
const {readFileSync,writeFileSync} = require('fs');
//second paramter is type of encoding by default is null if you never define it
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt','utf8')
console.log(first,second);


writeFileSync('./content/new-text.txt', `Here is the result: ${first}, ${second}`);
//default flag in the third paramter options is W, 'a' means append
writeFileSync('./content/new-text.txt', 'append text', {flag: 'a'});
console.log('hello world')