
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

let obj = {
    name: 'naisan'
}

// let x = Object.getOwnPropertyDescriptor(obj,'name')
// console.log(x);

let pro = Object.getPrototypeOf(obj)
console.log(pro);
let des = Object.getOwnPropertyDescriptor(pro,'propertyIsEnumerable')
console.log(des);