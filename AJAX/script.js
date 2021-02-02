let xhr = new XMLHttpRequest();

document.getElementById('btn').addEventListener('click', function () {

    console.log('you clicked me');


    // use for GET request.
    // open the xhr object.
    // xhr.open('GET / POST','URL','true');  true == asynchronous.
    // xhr.open('GET','https://jsonplaceholder.typicode.com/users');

    // use for POST request.
    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create');
    xhr.getResponseHeader('Content-type', 'application/json: charset=UTF-8');
    


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
    parameters = {
        "name": "test1",
        "salary": "123",
        "age": "23"
    }
    // xhr.send(parameters); //put json as a parameters.
    console.log(parameters);

})



// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
                             // FETCH API
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

