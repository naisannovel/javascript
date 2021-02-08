
function sum(a,b){
    return a + b;
}

function sub(num){
    return num - 2;
}

function multiply(num){
    return num * num;
}

let result = multiply(sub(sum(2,3)));
console.log(result);    // 9

// akta function ar input aakare onno akta function ar value asbe.
// abar onno function tar input aakare onno arekta function ar value asbe. 
// ata ke composition bole.