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

// --------------------instance--------------------------------

// # instance member hocce constructor ar nijer property.
// # prototype member hocce constructor ar proto/parent ar property.
// # instance constructor prototype ar property te access pabe.
// # constructor prototype instance ar property te access pabe.

function Draw(name){
    this.name = name

    // this.rectangle = function(){
    //     console.log('this is rectangle method');
    // }
}

Draw.prototype = {
    rectangle: function(){
        console.log('this is rectangle method');
    }
}

let draw1 = new Draw('naisan')
console.log(draw1);