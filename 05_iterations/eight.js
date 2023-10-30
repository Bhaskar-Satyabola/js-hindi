const  myNums=[1,2,3,4];

const myTotal=myNums.reduce((acc,currVal)=>{
    console.log(`acc : ${acc} and currVal :${currVal}`);
    return acc+currVal},3)
console.log(myTotal)



const shoppingCart=[
    {
        itemName:'Java',
        price:299
    },

    {
        itemName:'Js',
        price:2991
    },

    {
        itemName:'ts',
        price:2999
    }
]

const finalPrice=shoppingCart.reduce((acc,item)=>{return acc +item.price},0);
console.log(finalPrice);