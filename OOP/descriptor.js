// # to check prototype.
// Object.getPrototypeOf()

// # descriptor get
// Object.getOwnPropertyDescriptor(obj,'name')

// # descriptor set
// Object.defineProperty()

// # descriptor
// enumerable = traverse kora jabe ki na.
// writable = overwrite kora jabe ki na.
// configurable = delete hobe ki na.

let obj = {
    name: 'naisan'
}

// console.log(obj);
let proto = Object.getPrototypeOf(obj)
// console.log(proto);      // all proto
let propertyDescriptor = Object.getOwnPropertyDescriptor(obj,'name');
// console.log(propertyDescriptor);     // all true
let propertyDescriptor1 = Object.getOwnPropertyDescriptor(proto,'toString');   
// toString default property with Object.
// console.log(propertyDescriptor1);
let setDescriptor = Object.defineProperty(obj,'name',{
    configurable : false,
    enumerable: false,
    writable: false
    // value : 'i can set default value'
})

let propertyDescriptor2 = Object.getOwnPropertyDescriptor(obj,'name');
// console.log(propertyDescriptor2);    // all false
