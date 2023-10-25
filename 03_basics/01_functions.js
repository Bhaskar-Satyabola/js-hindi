

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
// console.log(loginUserMessage("bhaskar")); 

function calculateCartPrice(val1,val2,...num1){
return num1
}

// console.log(calculateCartPrice(200,400,500,2000))


const user={
    username:"bsb",
    prices:3000
}

function handleObject(anyObject){
console.log(`UserName is ${anyObject.username} & Price is ${anyObject.price}`);
}

// handleObject(user)

handleObject({
    username:"sam",
    price:400
})


const myNewArray=[200,300,400,600];

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200,3000,4000,]))