const score=400 
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));//decimal point

const othernumber = 12.5176
console.log(othernumber.toPrecision(3));

const othernumber1 = 127.2176
console.log(othernumber1.toPrecision(3));

const hundreds = 100000
console.log(hundreds.toLocaleString('en-IN'));//applying commas and separate

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.3));
console.log(Math.ceil(4.3));
console.log(Math.floor(4.3));

console.log(Math.random());
console.log((Math.random()*10)+1);//to avoid getting value 0 so we add 1 
console.log((Math.random()*10)+1);

const min =10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min);//to getn  min 10 we add 10 








