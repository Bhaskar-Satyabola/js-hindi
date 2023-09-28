//#Primitive Datatypes
//7 types: String,Number,Boolean,Null,undefined,Symbol,BigInt


const score=100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null
let userName;

const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId);


const bigNumber=1234234553463n
//JavaScript is A Dynamilcally Typd Language
// which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them

//Reference Type(Non-Primitive)
//Array,Objects,Functions


const heros= ['bhaskar', 'shubham','mb'];
let myObj={
    name:'bhaskar',
    age:22,
    
}

const myFunction= function(){
console.log('hello world');
}

console.log(typeof(bigNumber));
console.log(typeof(outsideTemp));
console.log(typeof(heros));
console.log(typeof(myObj));
console.log(typeof(myFunction));
console.log(typeof(id));
console.log(typeof(anotherId));