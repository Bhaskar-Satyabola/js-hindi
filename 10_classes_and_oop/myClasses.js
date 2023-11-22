//es6

// class User{
//     constructor(username,email,password){
//         this.username=username;
//         this.email=email;
//         this.password=password;
//     }
//     encryptPassword(){
// return `${this.password}abc`
//     }
//     letterUpperCase(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai=new User("bhaskar","chai@gmail.com","12345678")
// console.log(chai.letterUpperCase());


//Behind the scene

function user(username,email,password){
this.username=username;
this.email=email;
this.password=password;
 }

 user.prototype.encryptPassword=function(){
    return `${this.password}abc`
 }
 user.prototype.letterUpperCase=function(){
    return `${this.username.toUpperCase()}`
 }

 const Tea=new user("bhaskar","Tea@gmail.com","12345hff678")
 console.log(Tea);
console.log(Tea.letterUpperCase());
