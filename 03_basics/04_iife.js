//IIFE (Immeiately Invoked Function EXpresiions)

(function chai(){ 
    //named iife
    console.log(`DB Connected`);
})();

((name)=>{
    console.log(`db CONNECTD2 ${name}`);
})('bhaskar sb');