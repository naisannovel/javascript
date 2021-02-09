// this is an constructor pattern

let Circle = function(width,height){
    this.width = width
    this.height = height
    this.point = {
        x: 10,
        y: 35
    }

    this.draw = function(){
        console.log('this is draw method');
        console.log(this.point);
        this.rectangle()
    }

    this.rectangle = function(){
        console.log('this is rectangle method');
    }
}

let cir = new Circle(10,15)
// cir dot dile sob property and method dekhte parbo.


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
    
}

let cir1 = new Circle1(25,12)
// cir dot dile rectangle method and point property chara
// sob property and method dekhte parbo.
