'use strict';

//1. Object.freeze()
//It is method that doesn't allow us to add new properties to such objects,
//remove existing ones and change the current prototype of such object. For E.g.-
const someObject = {
    a: 'some string',
    b: 5,
    c: {
        x: 'changeable'
    }
};

Object.freeze(someObject);
someObject.a = 'some other string';
// Throws an error in strict mode

//An attempt to change the prop1 property will be unsuccessful and we will get the following error:
//Uncaught TypeError: Cannot assign to read only property 'a' of object ‘#<Object>’

//But we can still change the property of this object if it is an inner object. For E.g.-
someObject.c.x = 'changed';
console.log(someObject);
//{ a: 'some string', b: 5, c: { x: 'changed' } }

//We can restrict this behavior by making inner object as freeze. For E.g.-
Object.freeze(someObject.c);
someObject.c.x = 'will not be set';
// Throws an error in strict mode

//We can not change delete the properties of frozen objects. For E.g.-
delete someObject.c
console.log(someObject);
// Throws an error in strict mode

//We can not add new property in forzen object. For E.g.-
someObject.d = "d";
console.log(someObject);
// Throws an error in strict mode

//We can also check whether a object is frozen or not? For E.g.-
console.log(Object.isFrozen(someObject));


//2. Object.seal()
//It is quite similar to Object.freeze like we can’t add new properties, 
//delete existing ones and every property becomes non - configurable but the major difference is, values of properties can be changed:
