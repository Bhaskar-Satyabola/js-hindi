// const coding=['js','ruby','python','cpp'];
// const values=coding.forEach((item)=>{
//     console.log(item);
//     // return item;
// })
// console.log(values);


 const myNums=[1,2,3,4,5,6,7,8,9,10]
//  const newNums=myNums.filter((num)=> num>5) or
const newNums=myNums.filter((num)=>{
    return num>4
})

 console.log(newNums);



 const newNumbers=[];
 myNumbers.forEach(num => {
    if(num>4){
newNumbers.push(num)}
 });

console.log(newNumbers)