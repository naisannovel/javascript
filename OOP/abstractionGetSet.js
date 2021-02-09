// kono private property or method a Get or set korte parbo.

// copy this code from abstraction.js file.

// hide point property and rectangle method


let Circle1 = function(width,height){
    this.width = width
    this.height = height
    let point = {           // point property declare as a variable
        x: 10,
        y: 35
    }
    
    let rectangle = function(){  // rectangle method declare as a variable
        console.log('this is rectangle method');
        console.log(this.width);
    }.bind(this)    // bind this variable with this cir1 object.

    this.draw = function(){
        console.log('this is draw method');
        console.log(point);
        rectangle()
    }

    // this is the way for get and set.
    // defineProperty 3 ta parameters nibe. 1st ta kon obj hobe seta.
    // 2nd ta holo ki name ata k bahire theke access korte chai se name.
    // 3rd get or set obj.

    Object.defineProperty(this,'pointProperty',{
        get: function(){
            return point;
        },
        // jodi set korte chai tahole nicher rule.
        set: function(value){
            point = value;
        }
    })
    
}

let cir1 = new Circle1(25,12)
cir1.pointProperty = 45;    // set value then (console log).
console.log(cir1.pointProperty);    // after set (console log)
console.log(cir1.pointProperty);    // get only (console log)