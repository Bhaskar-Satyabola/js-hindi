class user{
       constructor(email,password){
    this.email=email;
    this.password=password
}
get email(){
    return `${this._email}@gmail.com`;
}
set email(value){
    this._email=value;
}
get password(){
    return this._password.toUpperCase()
}
set password(value){
    this._password=value
}
}

const hitesh=new user("bsb123","abcdef123")
console.log(hitesh.password);
console.log(hitesh.email);