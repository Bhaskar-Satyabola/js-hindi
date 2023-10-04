//array

const myArray=[0,1,2,3,4,56,7]
const myHeros=['BHaskar','BSB']
const myArr2=new Array(1,2,3,4)

console.log(myArray[0]);

//Array Methods

// myArray.push(6)
// myArray.push(12)
// console.log(myArray);

// myArray.pop()
// console.log(myArray);


// myArray.unshift('hello')
// myArray.shift()
// console.log(myArray);

// console.log(myArray.includes(56));
// console.log(myArray.indexOf(56));

// const newArr= myArray.join();
// console.log(myArray);
// console.log(newArr);

//slice,splice
console.log('A',myArray);

const myn1=myArray.slice(1,3)
console.log(myn1);
console.log('B',myArray);

const myn2=myArray.splice(1,3)
console.log('c',myArray);
console.log(myn2);
