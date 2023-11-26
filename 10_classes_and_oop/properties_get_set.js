function user(email,password){
    this._email=email;
    this._password=password;

    Object.defineProperty(this,'email',{
        get:function(){
            return `${this._email}@gmail.com`;
        },
        set:function(value){
            this._email=value
        }
    })
    Object.defineProperty(this,'password',{
        get:function(){
            return this._password.toUpperCase();
        },
        set:function(value){
            this._password=value
        }
    })

}

const chai=new user("bhaskar","abcd123")

console.log(chai.email);