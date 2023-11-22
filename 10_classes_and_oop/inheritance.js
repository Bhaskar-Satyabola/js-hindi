class user{
    constructor(username){
this.username=username;
    }
    logMe(){
        console.log(`username is ${this.username}`);
    }
}

class teacher extends user{
    constructor(username,email,password){
        super(username)
        this.email=email;
        this.password=password;
    }
    addCourse(){
        console.log(`New Course was added by ${this.username}`);
    }
}

const chai=new teacher("bhaskar","bhaskar@gmail.com","123")
console.log(chai);
chai.addCourse();
chai.logMe();

const shubham=new user("shubham")
console.log(shubham);
bhaskar.logMe();