// 1st j function ar sathe add korbo.
// 2nd j jinis ta add korbo.

// -----------------------call and apply method-----------------------------

// example 1

function sum(){
    let result = this.a + this.b
    console.log(result);
}

sum() // NaN  // because this refer window object.
sum.call( {a : 10, b : 15} ) // 25 // because now this refer input object.
sum.apply( {a : 10, b : 15} ) // 25 // because now this refer input object.
let result1 = sum.bind( {a : 10, b : 15} ); // bind with sum function
result1();

// example 2

function sumFunc(c,d){
    let result = this.a + this.b + c + d;
    console.log(result);
}

sumFunc( {a : 25, b : 20}) // NaN // because c and d undefined.
sumFunc.call( {a : 25, b : 20}, 5, 10); // 60
sumFunc.apply( {a : 25, b : 20}, [5, 10]); // 60 
// apply takes an array as a parameters.
// it's different between call and apply method. 

let result2 = sumFunc.bind( {a : 35, b : 10}, 5, 10);
result2()


