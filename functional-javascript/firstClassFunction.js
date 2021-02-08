// A function can be stored in a variable.
// A function can be stored in an array.
// A function can be stored in an object.
// We can create function as need.


function add(a,b){
    return a + b;
}

// A function can be stored in a variable.

let result = add;
console.log(typeof result); // function
console.log(result(10,5));  // 15


// A function can be stored in an array.

let ary = [];
ary.push(result);
console.log(ary);   // [ [Function: add] ]
console.log(ary[0](10,5));  // 15


// A function can be stored in an object.

let obj = {
    sum: result
}

console.log(obj.sum);   // [ [Function: add] ]
console.log(obj.sum(10,5)); // 15


// We can create function as need.

let output = setTimeout(() => {
    console.log('hello world');
},2000);

console.log(output);    // hello world