//for of 

const arr=[1,2,3,4,5]
for (const num of arr) {
    // console.log(num);
}


const greetings="hello world";
for (const greet of greetings) {
    // console.log(`Each Character is : ${greet}`)
}

///Maps
const map =new Map()
map.set('IN','india')  
map.set('US','United states')  
map.set('fr','france') 
map.set('IN','india')  

// console.log(map);
for (const [key,value] of map) {
    console.log(key, ':- ', value);
}

const myObj={
    "game1":"nfs",
    "game2":"gta"
}

for (const [key,value] of myObj) {
    console.log(key,":-",value)
}