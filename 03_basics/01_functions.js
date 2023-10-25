

function sayMyName(){
    console.log('h');
    console.log('a');
    console.log('s');
    console.log('k');
    console.log('a');
    console.log('r');
    
}

// sayMyName()


// function addTwoNum(num1,num2){
//    console.log(num1+num2) ;
// }

function addTwoNum(num1,num2){
//   let result= num1+num2;
//   return result;
 
return num1+num2 ;
}

const result=addTwoNum(1,3)
// console.log(`Result : ${result}`);

function loginUserMessage(username="sam"){
    if(!username){
console.log("Plese Enter a User Name")
return
    }
return `${username} just logged in`
}
// console.log(loginUserMessage("Bhaskar")); 
console.log(loginUserMessage("bhaskar")); 