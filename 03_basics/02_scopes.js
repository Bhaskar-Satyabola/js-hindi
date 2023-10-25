// var c=300;
let a=300

if(true){
    let a=10;
    const b=20;
    // var c=30;
    // console.log(`inner : ${a}`);
}


// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username="bhaskar"

    function two(){
        const website="youtube"
        console.log(username);
    }
    // console.log(website)

    two()
}
// one()


if(true){
    const username="bsb"
    if(username==="bsb"){
        const website=" youtube"
        // console.log(`${username} + ${website}`);
    }
    // console.log(website);
}

// console.log(username);



//--------------+++++++++++++++++INTERRESTING-------------++++++++++++++++++++++++//

console.log(addOne(5)); 
function addOne(num){
return num+1
}


console.log(addTwo(6));
const addTwo =function(num){
    return num+2
}
