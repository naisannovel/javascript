
function greet(message){
    function greetings(name){
        return `${message} ${name}`;
    }
    return greetings;
}

const callGreetFunc = greet('good morning');
// callGreetFunc also a function.

const greetingFunc = callGreetFunc('naisan');

console.log(greetingFunc);