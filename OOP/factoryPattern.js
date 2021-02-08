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


// now we will create a factory pattern using circle object.
// actually factory pattern is a function.

let factory = function(width,height){

    return {
        width: width,
        height: height,
    
        draw: function(){
            console.log('this is draw method');
            console.log(this.width, this.height);
        }
    }

}

let pattern = factory(7,5)
pattern.draw()

