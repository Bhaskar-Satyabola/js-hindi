// let myName="bhaskar           "
// let myChannel="BHaskaryt     "
// console.log(myName.truelength);

let myHeros=['thor','spdrman']
let heroPower={
    thor:"hammer",
    spdrman:"sling",

    getSpiderPower:function(){
        console.log(`spidy power is ${this.spdrman}`);
    
    }
}
Object.prototype.bhaskar=function() {
    console.log(`bhaskar is present in all Objects`);
}
Array.prototype.heyBhaskar=function(){
    console.log(`Bhaskar says hello`);
}
// heroPower.bhaskar()
myHeros.bhaskar();
myHeros.heyBhaskar();
// heroPower.heyBhaskar();




//Inheritance



const user={
    name:'chai',
    email:'@google.com'
}
const Teacher={
    makeVideo:true,
}
const teachingSupport={
    isAvailable:false
}
const TASupport={
    makeAssignment:'JS assignment',
    fullTime:true,
    __proto__:teachingSupport
}

Teacher.__proto__= user

//MODERN SYNTAX

Object.setPrototypeOf(teachingSupport,Teacher)

let anotherUserName='chaiAurCdoe     '
 String.prototype.trueLength=function() {
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True LENGTH IS:  ${this.trim().length}`);
 }
 anotherUserName.trueLength()
 "bhasar".trueLength();
 "shubham".trueLength();