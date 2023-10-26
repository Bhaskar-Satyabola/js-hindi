const user={
    username:"bhaskar",
    price:299,

    welcomeMessage: function(){
        console.log(`${this.username} ,welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username="shubham";
// user.welcomeMessage()
// console.log(this)

// function chai(){
//     let username="bhaskar";
//     console.log(this.username);
// }
// chai()

// const chai= function(){
//     let username="bhaskar";
//         console.log(this.username);
// }
// chai()


const chai= ()=>{
    let username="bhaskar";
        console.log(this);
}
// chai()

// const addTwo=(num1,num2)=>{
//     return num1+num2
// }


// const addTwo=(num1,num2)=> num1+num2
// const addTwo=(num1,num2)=> (num1+num2)
const addTwo=(num1,num2)=> ({
    userName:"bhaskar"
})

console.log(addTwo(3,5)); 


// const myArray=[2,3,4,5,6,7]
// myArray.forEach()