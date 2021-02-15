function Common(color){
    this.color = color
}

Common.prototype.common = function(){
    console.log('this is common method');
}

function Shape(width,height,color){
    this.width = width
    this.height = height
    Common.call(this,color)     // this is super call.
}

Shape.prototype = Object.create(Common.prototype)   // inheritance
Shape.prototype.constructor = Shape                 // reset constructor

// Shape.prototype.common = function(){                 // common method overwrite
//     Common.prototype.common.call(this)      // parent common method call
//     console.log('this is overridden common method');
// }

Shape.prototype.draw = function(){
    console.log('this is draw method');
}

let shape1 = new Shape(10,15,'green')
console.log(shape1);





// -----------------Object.assign method and composition--------------------------------

let canWalk = {
    walk: function(){
        console.log('walking...');
    }
}

let canEat = {
    eat: function(){
        console.log('eating...');
    }
}

// let person = Object.assign({target},canWalk,canEat)          // return new person obj 

function Person(name){
    this.name = name
}
Object.assign(Person.prototype,canEat,canWalk)

let person1 = new Person('naisan')