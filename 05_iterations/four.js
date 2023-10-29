const myObj={
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    py:"python"
}


for (const key in myObj) {
   console.log(`${key} SHORTCUT IS FOR ${myObj[key]}`)
}

const programming=['js','ruby','python','html']

for (const key in programming) {
    // console.log(programming[key])
}


// const map =new Map()
// map.set('IN','india')  
// map.set('US','United states')  
// map.set('fr','france') 
// map.set('IN','india')  


// for (const key in map) {
//     console.log(key)
// }