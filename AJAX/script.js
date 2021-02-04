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

