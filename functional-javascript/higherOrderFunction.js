// we can pass function as an arguments
// we can return function from another function


// we can pass function as an arguments

function sum(a,b){
    return a + b;
}

function multiply(a, b, cb){
    let c = a + b;
    let d = a - b;
    let m = cb(a,b);
    
    return c + d + m
}

let result = multiply(5, 7, sum);
console.log(result);    // 22



// we can return function from another function

function greetings(val){

    function greet(name){
        return `${val}! ${name}`
    }
    return greet;
}

let message = greetings('good night');
console.log(typeof message);    // function
console.log(message('naisan'));