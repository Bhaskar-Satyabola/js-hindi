//singleton
// Object.create


//object literals

const mySym= Symbol('key1');

const jsUser={
name:'Bhaskar',
"full-name":'Bhaskar satyabola',
[mySym]:'key2',
age:20,
location:'Ramnagar',
Email:'bsb@gmail.com',
isLoggedIn:true,
lastLoginDays:['Monday','Wednesday']
}

// console.log(jsUser.name);
// console.log(jsUser['name']);
// console.log(jsUser["full-name"]);
// console.log(jsUser[mySym]);


jsUser.Email="bsatyabola.bs11@gmail.com";
// Object.freeze(jsUser)
jsUser.Email="bsatyabola.bs11@gpt.com";

// console.log(jsUser);


jsUser.greeting=function(){
    console.log('Hello Js User');
}

jsUser.greetingTwo=function(){
    console.log(`Hello Js User, ${this.name}`);
}



console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())
