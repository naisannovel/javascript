// It returns the same result if given the same arguments/value.
// it does not cause any observable side effects.


// It returns the same result if given the same arguments/value.

function sum(n){
    console.log(n+n);
}

sum(7)  // 14
sum(7)  // 14
sum(7)  // 14


// it does not cause any observable side effects.

let num = 10;

function changeValue(){
    num = 200; 
}

console.log(num);   //10

changeValue()   //call function

console.log(num);   //100


