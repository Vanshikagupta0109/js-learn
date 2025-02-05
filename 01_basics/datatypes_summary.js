//primitive


// 7 types : string , number, boolean , null, undefined, symbol,BigInt
const score=100

const id= Symbol('123')
const anotherid=Symbol('123')// these both are not same 

console.log(id===anotherid);

const bigNumber= 234321235456654n


// reference(  non primitive)

//array, objects, functions





//..........................

// stack memeory(primitive), heap memory(non-primitive)

let myyoutubename ="vanshikadotcom"
let anothername= "vanshiii"
anothername="chaiorcode"
console.log(myyoutubename);
console.log(anothername);

let userone={
    email:"user@google.com",
    upi:"tryeu3"

}

let usertwo=userone
usertwo.email="vanshka@googleemail";

console.log(userone.email);
console.log(usertwo.email);

