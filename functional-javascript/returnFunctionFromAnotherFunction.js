
function greet(message){

    // create inner function.

    function greetings(name){
        return `${message} ${name}`;
    }

    // return inner function.

    return greetings;
}

const callGreetFunc = greet('good morning');
// callGreetFunc also a function. because we return inner function
// for that callGreetFunc hold inner function.

const greetingFunc = callGreetFunc('naisan');

console.log(greetingFunc);







