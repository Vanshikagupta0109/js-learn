//primitive


// 7 types : string , number, boolean , null, undefined, symbol,BigInt
const score=100

const id= Symbol('123')// how to declare symbol
const anotherid=Symbol('123')// these both are not same this is shymbol used they are not equal even if their value is equal


console.log(id===anotherid);

const bigNumber= 234321235456654n// bigint bn gya by using n in last


// reference(  non primitive)

//array, objects, functions

const heroes = ["shaktiman", "naraj" , "doga"]
let myobj={
    name:"vanshii",
    age:21,
}

//const myfunction=(){
    console.log("hello world"); 
    
 //   }
//non primitive ka type object bhota hai aur function ka function object


//..........................

// stack memeory(primitive)//copy, heap memory(non-primitive)//original value ka reference

let myyoutubename ="vanshikadotcom";// stack memory ka example
let anothername= "vanshiii";
anothername="chaiorcode";
console.log(myyoutubename);
console.log(anothername);// dono mein alag value store hogi

let userone={                 
    //heap memory ex
    email:"user@google.com",
    upi:"tryeu3",

}

let usertwo = userone
usertwo.email="vanshka@googleemail";

console.log(userone.email); //vanshika wali value print hogi dono mein same
console.log(usertwo.email);

