const coding=['js','ruby','python','cpp'];
 
// coding.forEach(function (element){
//     console.log(element);
// });
// coding.forEach(element => {
//     console.log(element);
// });

// function printMe(element){
//     console.log(element)
// }
// coding.forEach(printMe)

// coding.forEach((element,index,arr) => {
//         console.log(element,index,arr);
//     });


const myCoding=[{langName:'javascript',langFile:'js'},
{langName:'python',langFile:'py'},
{langName:'ruby',langFile:'rb'}
]

myCoding.forEach(elem=>{
    console.log(elem.langName);
})