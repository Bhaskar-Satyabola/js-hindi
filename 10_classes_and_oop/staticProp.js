class user{
    constructor(username){
this.username=username;
    }
    logMe(){
console.log(`Username is ${this.username}`)
    }
    static createId(){
        return `123`
    }
}

const bsb= new user("bhasakar")
// console.log(bsb.createId());


class teacher extends user{
    constructor(username,email){
        super(username)
        this.email=email;
    }
}

const iphone =new teacher("phone","bsb@phone.com")
iphone.logMe()
console.log(iphone.createId());