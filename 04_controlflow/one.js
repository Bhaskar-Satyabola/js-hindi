//if
// const isUserLoggedIn=true;
// const temp=71
// if(temp<50){
// console.log("less than 50");
// }else{
// console.log("temp is greater than 50");
// }
// console.log("Execute");


// const score=200;
// if (score>100){
//     const power="fly"
//     console.log(`UserPower :${power}`);
// }
// console.log(`UserPower :${power}`);



// const balance=1000
// if(balance>500) console.log("test");

// if(balance<500){
// console.log("less than 500");
// }
// else if(balance<750){
// console.log("less than 750");
// }
// else if(balance<1000){
//     console.log("less than 1000");
// }
// else{
//     console.log("less than 1200");
// }


const UserLoggedIn=true
const debitCard=true
const loggedInFromGoogle=false
const loggedInFromEmail=true

if(UserLoggedIn && debitCard){
console.log("User allow to buy Courses");
}
if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User Logged In");
}