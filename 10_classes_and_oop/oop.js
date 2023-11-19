// const user={
//     username:"bhaskar",
//     loginCount:8,
//     signedOut:true,

//     getUserDetails:function() {
//         // console.log('Got User Details')
//         // console.log(`UserName: ${this.username}`)
//         console.log(this)
//     }
// }

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);




function user(username,loginCount,isloggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isloggedIn=isloggedIn;


    this.greetings=function(){
        console.log(`welcome ${this.username}`);
    }
    return this;
}

const user1= new user("bhaskar",4,true)
const user2= new user("bsb",5,true)
console.log(user1.constructor);
// console.log(user2);