// # add prototype with constructor
// constructorName.prototype.addSomething = 'something'

function AddPrototype(name){
    this.name = name
}

AddPrototype.prototype.AddSomething = function(){}

let obj1 = new AddPrototype('naisan')   // obj1 ar parent AddPrototype
// console.log(obj1);


let obj2 = {}
Object.prototype.something = 2546545;
// console.log(obj2);  
// obj2 ar parent ai something prototype ta hold kore ace.