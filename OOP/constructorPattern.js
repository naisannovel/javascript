// declare an object

let circle = {
    width: 10,
    height: 20,

    draw: function(){
        console.log('this is draw method');
        console.log(this.width, this.height);
    }
}

circle.draw()   // call draw method.


// now we will create a constructor pattern using circle object.
// actually constructor pattern is a function.
// use capital letter when we will create constructor pattern.

let Rect = function(width,height){
    this.width = width
    this.height = height
    this.draw = function(){
        console.log('this is draw method');
        console.log(this.width, this.height);
    }
}

let rect1 = new Rect(5,7);
rect1.draw()

