const name = "vanshii"
const repocount = 50

//console.log(name+repocount+"value");

// string inporalation method 
//backtext method
console.log(`helooo my name is ${name} and my repo count is ${repocount} `);

const gamename= new String('hoteshhh-hhh')
console.log(gamename[0]);
//anotger way of prototype
console.log(gamename._proto_);

console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt('2'));
console.log(gamename.indexOf('t'));

const newstring= gamename.substring(0,4)
console.log(newstring);

const anotherstring= gamename.slice(-8,4)
console.log(anotherstring);


const newstring1= "  hitesh   "
console.log(newstring1);
console.log(newstring1.trim());

const url="https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'));
console.log(url.includes('sundar'));

console.log(gamename.split('-'));


