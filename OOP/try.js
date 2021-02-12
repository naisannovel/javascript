
// function circle(width,height){
//     return {
//         width: width,
//         height: height,
//         draw: function(){
//             console.log('this is draw method');
//             console.log(this.width,this.height);
//         }
//     }
// }

// let circle1 = circle(5,4)
// circle1.draw()

// function circle(width,height) {
//     return{
//         width: width,
//         height: height,
//         draw: function(){
//             console.log('this is draw function');
//             console.log(this.width,this.height);
//         }
//     }
// }

// let cir1 = circle(2,8)
// cir1.draw()

// function Circle(width,height){
//     this.width = width
//     this.height = height
//     this.draw = function(){
//         console.log('this is draw method 1');
//         console.log(this.width,this.height);
//     }
// }

// let cir1 = new Circle(5,4)
// cir1.draw()


// function circle(width,height){
//     return {
//         width: width,
//         height: height,
//         draw: function(){
//             console.log('this is draw method');
//             console.log(this.width,this.height);
//         }
//     }
// }

// let cir1 = circle(1,2)
// cir1.draw()

// let circle = function(width,height){
//     return {
//         width: width,
//         height: height,
//         draw: function(){
//             console.log('this is draw method');
//             console.log(this.width,this.height);
//         }
//     }
// }

// let cir1 = circle(2,3)
// cir1.draw()

// function Circle(width,height){
//     this.width = width
//     this.height = height
//     this.draw = function(){
//         console.log('this is draw method');
//         console.log(this.height,this.width);
//     }
// }

// let cir1 = new Circle(20,30)
// cir1.draw()

// let Circle = function(width,height){
//     this.width = width
//     this.height = height
//     this.draw = function(){
//         console.log('this is draw method');
//         console.log(this.width,this.height);
//     }
// }

// let cir1 = new Circle(100,200)
// cir1.draw()

// function Circle(width,height){
//     this.width = width
//     this.height = height
//     let point = {
//         math: 95,
//         english: 99
//     }

//     this.draw = function(){
//         console.log('this is draw method');
//         rectangle()
//         console.log(point)
//     }
    
//     let rectangle = function(){
//         console.log('this is rectangle function');
//         console.log(this.width,this.height);
//     }.bind(this)

//     Object.defineProperty(this,'point1',{
//         get: function(){
//             return rectangle;
//         },
//         set: function(value){
//             rectangle = function(){
//                 console.log(value);
//             }
//         }
//     })
// }

// let cir = new Circle(10,20)
// // cir.draw()
// cir.point1 = {a:80,b:69,c:89}
// console.log(cir.point1());


// function Circle(width,height){
//     this.width = width
//     this.height = height

//     this.rectangle = function(){
//         console.log('this is rectangle method');
//         console.log(this.width,this.height);
//     }

//     this.draw = function(){
//          console.log('this is draw method');
//          this.rectangle()
//     }

// }
// let cir = new Circle(10,15)
// cir.draw()

// let obj = {
//     name: 'naisan'
// }

// // let x = Object.getOwnPropertyDescriptor(obj,'name')
// // console.log(x);

// let pro = Object.getPrototypeOf(obj)
// console.log(pro);
// let des = Object.getOwnPropertyDescriptor(pro,'propertyIsEnumerable')
// console.log(des);

// function Circle(name){
//     this.name = name
// }

// Circle.prototype.pi = 25412
// let name1 = new Circle('naisan')
// let name2 = new Circle('naisan')
// let name3 = new Circle('naisan')

// console.log(name1);
// console.log(name2);
// console.log(name3);


// function Circle(width,height){
//     this.width = width
//     this.height = height
// }
// Circle.prototype = {
//     rectangle: function(){
//         console.log('this is rectangle method');
//     },
//     draw: function(){
//         console.log('this is draw method');
//     }
// }

// let cir1 = new Circle(25,45)
// Object.defineProperty(cir1,'width',{
//     writable: false,
//     enumerable: false,
//     configurable: false
// })

// console.log(cir1);
// console.log(Object.getOwnPropertyDescriptor(cir1,'width'));
// console.log(Object.getOwnPropertyDescriptor(cir1,'height'));
// console.log(cir1.hasOwnProperty('width'));
// console.log(Object.getPrototypeOf(cir1.rectangle));
// console.log(Object.getPrototypeOf(cir1));

// let x = Object.getPrototypeOf(cir1)
// let y = Object.getPrototypeOf(x)
// console.log(y);

// function Shape(){

// }
// Shape.prototype = {
//     draw :function(){
//         console.log('this is draw method');
//         this.circle()
//     }
// }

// function Rectangle(width,height){
//     this.width = width
//     this.height = height

//     this.circle = function(){
//         console.log('this is circle method');
//         // this.draw()
//         console.log(this.width,this.height);
//     }
// }

// Rectangle.prototype = Object.assign(Shape.prototype)
// // Rectangle.prototype = Object.create(Shape.prototype)
// Rectangle.prototype.common = function(){
//     console.log('this common method');
// }


// let rect = new Rectangle(45,69)

// // console.log(Rectangle.prototype);


// let obj1 = {
//     name: 'naisan',
//     roll: 25
// }
// console.log(obj1);
// let obj2 = Object.assign(obj1)
// console.log(obj2);
// console.log(Object.getPrototypeOf(obj2));

function Common(color){
    this.color = color
}
Common.prototype = {
    common: function(){
        console.log('this is common method');
    }
}
let com = new Common('green')

function Draw(width,height,color){
    this.width = width
    this.height = height  
}

Draw.prototype = Object.create(Common.prototype);
Draw.prototype.constructor = Draw;

Draw.prototype.common = function(){
    com.common.call(this)
    console.log('this is common method 2');
}


let draw1 = new Draw(15,25)
console.log(draw1);
