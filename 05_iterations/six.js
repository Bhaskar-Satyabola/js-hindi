// const coding=['js','ruby','python','cpp'];
// const values=coding.forEach((item)=>{
//     console.log(item);
//     // return item;
// })
// console.log(values);


//  const myNums=[1,2,3,4,5,6,7,8,9,10]
// //  const newNums=myNums.filter((num)=> num>5) or
// const newNums=myNums.filter((num)=>{
//     return num>4
// })

//  console.log(newNums);



//  const newNumbers=[];
//  myNums.forEach(num => {
//     if(num>4){
// newNumbers.push(num)}
//  });

// console.log(newNumbers)


const books=[
    {title:'Book One',genre:'fiction',publish:1981,edition:2004},
    {title:'Book two',genre:'Non-fiction',publish:1982,edition:2007},
    {title:'Book three',genre:'History',publish:1983,edition:2002},
    {title:'Book four',genre:'Non-fiction',publish:1984,edition:2005},
    {title:'Book five',genre:'Science',publish:1985,edition:2009},
    {title:'Book six',genre:'fiction',publish:1986,edition:2012},
    {title:'Book seven',genre:'History',publish:1987,edition:2023}
];

let userBooks=books.filter((bk)=>bk.genre==='History')
userBooks=books.filter((bk)=>{
    return bk.publish>=1984 && bk.edition===2005;
})
console.log(userBooks);