const promise1 =new Promise(function(resolve,reject){
    //Do an async Task
    //DB calls,cryptography related ,netwrok call
    setTimeout(function(){
        console.log('Async Task is complete');
        resolve()
    },1000)
})

promise1.then(function(){
    console.log('Promise consumed');
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async Task 2');
        resolve()
    },1000)
}).then(function(){
    console.log('ASync 2 is resolved')
})


const promise3= new Promise(function(resolve,reject){
    setTimeout(function(){
resolve({username:'chai',email:'bsb@gmail.com'})
    },1000)
})
promise3.then(function(user){
console.log(user);
})


const promise4 =new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({username:'bsb',password:"123456"})
        }
        else{
            reject('Error Something WEnt Wrong')
        }
    },1000)
})
promise4.then(function(user){
    console.log(user);
    return user.username
}).then((username)=>{
console.log(username);
}).catch(function(error) {
    console.log(error);
}).finally(()=>{
console.log('the promise is either resolve or rejected');
})


const promise5= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:'Javascript',password:"123456"})
        }
        else{
            reject('Error:Js WEnt Wrong')
        }
    },1000)
})

async function consumePromise5(){
try{
    const response= await promise5;
    console.log(response);
}
catch(error){
console.log(error);
}
}
consumePromise5()



// async function getAllUser(){
//     try{
//         const response=await fetch('https://jsonplaceholder.typicode.com/users');
     
//         const data = await response.json()
//         console.log(data);
//     }
//     catch(error){
//         console.log(error);
//     }
   
// }

// getAllUser()


fetch('https://api.github.com/users/hiteshchoudhary')
.then(function(response){
return response.json()
})
.then(function(response) {
    console.log(response)
})
.catch(function(error){
    console.log('error is found');
})