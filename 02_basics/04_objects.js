// const tinderUser=new Object() //singleton Object
const tinderUser={}     //Object Literals
 tinderUser.id="123abc"
 tinderUser.name="sam"
 tinderUser.isLoggedIn=true
// console.log(tinderUser);


const regularUser={
    email : "some@sbh.com",
    fullname:{
        userfullname:{
            firstname:'bhaskar',
            lastname:'satyabola'
        }
    }
}
// console.log(regularUser.fullname.userfullname);


const obj1={
    1:'a',
    2:'b',
}
const obj2={
    3:'a',
    4:'b',
}
// const obj3={obj1,obj2}
// const obj3=Object.assign({},obj1,obj2);
const obj3={...obj1,...obj2}

// console.log(obj3)

const users=[
    {
        id:'1',
        email:'bsb@gmail.com',
    },
    {
        id:'2',
        email:'bsb@gmail.com',
    },
    {
        id:'3',
        email:'bsb@gmail.com',
    },
    {
        id:'4',
        email:'bsb@gmail.com',
    },
]

users[1].email
console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course={
    courseName:'Js in Hindi',
    price:'999',
    courseTeacher:'hitesh',
}

// console.log(course.courseTeacher) ;
const{courseTeacher:instructor}=course
// console.log(courseTeacher)
console.log(instructor);

// {
//     'name':"bhaskar",
//     "coursename": "js in hindi",
//     "price":'free'
// }


[
    {},
    {},
    {}
]


