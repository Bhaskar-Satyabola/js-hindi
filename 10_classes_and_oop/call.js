function setUserName(username) {
    //complex db calls
    this.username=username;

}

function createUser(username,email,password){
setUserName.call(this,
    username)
this.email=email;
this.password=password;
}

const chai= new createUser('chai',"chai@goggle.com","abcd123")
console.log(chai);