// let xhr = new XMLHttpRequest();
// console.log(xhr);

// document.getElementById('btn').addEventListener('click', function () {

//     console.log('you clicked me');


    // use for GET request.
    // xhr.open('GET / POST','URL','true');  true == asynchronous.
    // open the xhr object.
    // xhr.open('GET','https://jsonplaceholder.typicode.com/users');

    // use for POST request.
    // xhr.open('POST', 'naisan.txt');
    // xhr.getResponseHeader('Content-type', 'application/json: charset=UTF-8')
    


    // use for GET request.
    // what to do on progress.(Spinner)
    // xhr.onprogress = function(){
    //     console.log('cring cring');
    // }

    // use for GET request.
    // xhr.onreadystatechange = function(){
    //     console.log('readyState is' + this.readyState);
    // }


    // use for GET request.
    // what to do when response is ready.
    // xhr.onload = function(){
    //     if(this.status == 200){
    //         console.log(this.responseText); //this == xhr object.
    //     }else{
    //         console.error('some error occured')
    //     }
    // }

    // send request for GET.
    // xhr.send();



    
    // send request for POST.
//     parameters = {
//         "name": "test1",
//         "salary": "123",
//         "age": "23"
//     }
//     xhr.send(parameters); //put json as a parameters.
    

// })



// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
                             // FETCH API
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

// let pro = new Promise(function(resolve,reject){
//     let a = true;
//     if(a){
//         resolve('good')
//     }else{
//         reject('bad')
//     }
// })

// pro.then(function(v){
//     console.log(v);
//     return v + ' '+'hello world';

// }).then(function(v){
//     console.log(v);
//     return v + ' ' + 'naisan novel'
// }).then((v)=>console.log(v))


// pro.catch(function(v){console.log(v);})

// var jsonPromise = new Promise(function(resolve, reject) {
//     // JSON.parse throws an error if you feed it some
//     // invalid JSON, so this implicitly rejects:
    
    
//   });


// -------------------------------------------------------------------------
// -------------------------------------------------------------------------
  
// function get(url){
//     return new Promise(function(a,b){
//         let xhr = new XMLHttpRequest();

//         xhr.open('GET',url,true);

//         xhr.onload = function(){
//             if(xhr.status == 200){
//                 a(xhr.responseText)
//             }
//             else{
//                 b(console.error(xhr.statusText))
//             }
//         }

//         xhr.send()
//     })
// }

// get('naisan.txt').then((data)=>{
//     return JSON.parse(data)
// }).then((d)=>{
//     console.log(d);
// })


// --------------------------------------------------------------------
// --------------------------------------------------------------------

// let xhr = new XMLHttpRequest();

// xhr.open('GET','naisan.txt',true);

// xhr.onload = function(){
//     if(xhr.status == 200){
//         let jso = JSON.parse(xhr.responseText);
//         console.log(jso);
//     }
//     else{
//         console.log('bye bye');
//     }
// }
// xhr.send()


// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------

// fetch('naisan.txt')
// .then((v)=>{
//     return v.json()
// })
// .then((users)=>{
    
//     console.log(users);
//     for(let i in users){
        
//         console.log(i);
//     }
//     // for (let i = 0; i < users.length; i++) {
//     //     const element = users[i];
//     //     console.log(element);
//     // }
// })

// document.getElementById('btn').addEventListener('click',function(){
//     let xhr = new XMLHttpRequest();
//     xhr.open('POST','https://api.github.com/users',true)

//     // xhr.setRequestHeader('content-type','application/json')  //used for post method.
//     // xhr.onload = function(){
//     //     if(this.status == 200){
//     //         let jso = JSON.parse(this.responseText);
//     //         let x = jso.map((v)=>{
//     //             console.log(v.login);
//     //             return v.login
//     //         })
//     //         console.log(x);
//     //     }
//     //     else{
//     //         console.log('some error occured');
//     //     }
//     // }
//     xhr.onprogress = function(){
//         console.log('progressing...');
//     }

//     let postValue = {"name":"test","salary":"123","age":"23"}
//     console.log(xhr);
//     xhr.send(postValue)
//     console.log(xhr);
//     // console.log(xhr);
// })


// fetch('https://jsonplaceholder.typicode.com/posts',{
//     method:'POST',
//     body: JSON.stringify({
//         name:'novel',
//         id:10
//     }),
//     headers:{
//         'content-type':'application/json; charset=UTF-8'
//     }
// })
// .then((v)=> {
//     let x = JSON.parse(v)
//     return x;
// })
// .then((v)=>console.log(v))

// let a = {
//     nam: 'naisan',
//     salary: 50000,
//     sum: function(){
//         this.salary = this.salary + 1000;
//         return this.salary;
//     }
// }

// let b = {
//     nam: 'novel',
//     salary: 40000,
// }

// let x = a.sum.bind(b);

// console.log(x());


// class person{
//     constructor(name,id){
//         this.name = name;
//         this.id = id;
//     }
//     conca(){
//         console.log(this.a + this.b);
//     }
// }
// let y = {
//     a: 10,
//     b:20
// }
// let x = new person()
// let o = x.conca.bind(y)
// console.log(x.conca());


// let pro = new Promise((res,rej)=>{
//     let xhr = new XMLHttpRequest()
    
//     xhr.open('GET','https://api.github.com/users')
//     xhr.onload= function() {
//         if(this.status == 200){
//             res(this.responseText)
//         }
//     }
//     xhr.send()
// })

// pro.then((x)=> {
//     return JSON.parse(x)
// }).then((v)=>console.log(v))

// let p = JSON.parse()
// // let p2 = new Object(p1)
// console.log(p);

// let x = '{"name":"test","salary":"123","age":"23"}'
// let y = JSON.parse(x)
// const f = new Object();
// f.name = y.name;
// f.salary = y.salary;
// f.age = y.age;
// console.log(f);

// let abc = {
//     name:'naisan',
//     salary:15000
// }
// fetch('https://jsonplaceholder.typicode.com/posts',{
//         method:'POST',
//         headers:{'content-type':'application/json'},
//         body:JSON.stringify(abc)
//     })
//     .then(r => r)
//     .then(d=>console.log(d))
    

// let xhr = new XMLHttpRequest();
// xhr.open('POST','https://jsonplaceholder.typicode.com/posts',true)

// xhr.onprogress = function() {
//     console.log('progressing...');
// }
// // xhr.onload = function () {
// //     // console.log(this.responseText);
    
// // }

// xhr.onload = function () {
//     if (this.status == 201) {
//         alert(this.responseText)
//     }
// }
// // xhr.onreadystatechange = function () {
// //     if (this.readyState == 4) {
// //         alert(this.responseText)
// //     }
// //     else{
// //         console.log('kkk');
// //     }
// // }

// xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8')

// xhr.send(JSON.stringify(abc))


// function get(url) {
//     return new Promise(function(r,rej) {
//         let xhr =  new XMLHttpRequest()
//         xhr.open('GET',url,true)
//         xhr.onload = function() {
//             if (this.status == 200) {
//                 r(this.responseText)
//             }else{
//                 rej(this.responseText)
//             }
//         }
//         xhr.send()
//     })
// }

// get('https://jsonplaceholder.typicode.com/posts')
// .then(r=>{
//     return JSON.parse(r)
// })
// .then(d=>{
//     d.forEach(element => {
//         console.log(element.id,element.title);
//     });
// })


async function naisan(){
    let x = await fetch('https://api.github.com/users')
    let y = await x.json()
    return y;
}

// let a = naisan()
// a.then(d=>{
//     d.forEach(element => {
//         console.log(element.login);
//     });
// })
let h = naisan()
h.then(d=>console.log(d))