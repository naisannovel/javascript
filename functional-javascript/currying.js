function sum(a){

    return function(b){

        return function(c){

            return a + b + c;

        }
    }
}

let result = sum(10)(15)(25);
console.log(result);    // 50

// akta function ar vitor a onek gulo function return kora thakle segulo
// pasapasi call kora k currying bole.