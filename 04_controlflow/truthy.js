// const userEmail="h@gmail.com"
// if(userEmail){
//     console.log("Got User Email");
// }
// else{
//     console.log("Dont have user Email");
// }


// falsy values

// false,0,-0,BigInt 0n,"",null,undefined,NaN


//truthy values
//true,"0","false"," ",[],{},function(){}


// const userEmail=[]
// if(userEmail.length===0){
//     console.log("Empty array")
// }


const userEmail={}
if(Object.keys(userEmail).length===0){
console.log("object is empty");
}




// nullish coalescing OPerator(??):null undefined

let val1;
// val1=5 ?? 10;
// val1=null ?? 10;

// var1= undefined ?? 15
val1 =null ?? 10 ??15



console.log(val1);




//ternary operator


// condition ?true:false

const iceTea=100
iceTea <= 80 ? console.log("less than 80") : console.log("greater than 80");