const user={
    _email:'bsb@gmail.com',
    _password:"123@123",

    get email(){
return this._email.toUpperCase();
    },
    set email(value){
this._email=value;
    }

}

const tea=Object.create(user)
console.log(tea.email);