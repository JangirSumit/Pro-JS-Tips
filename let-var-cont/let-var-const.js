//1. Declaration
let foo = 10;
console.log(foo);
var bar = 20;
console.log(bar);
const baz = 30;
console.log(baz);
//10
//20
//30

//We can not redeclare let and const with the same name, but can do in var E.g.-
let foo = 20;
console.log(foo);
var bar = 30;
console.log(bar);
const baz = 40;
console.log(baz);
//Uncaught SyntaxError: Identifier 'foo' has already been declared
//30
//Uncaught SyntaxError: Identifier 'baz' has already been declared

//We can not reassign the value in const variables. E.g.-
foo = 20;
console.log(foo);
bar = 30;
console.log(bar);
baz = 40;
console.log(baz);
//20
//30
//Uncaught TypeError: Assignment to constant variable.

//But we can change values of const object
const emp = { name: "foo", age: 30 }
console.log(emp);
emp.age = 35;
console.log(emp);

//Conclusion : 
//1. We can not redeclare the let and const variables
//2. We can re assign the value in let but can not in const.
//3. We can change the properties of const objects.


//2. Scope
//scope of var is global and accessible through out the functions E.g.-
//Example 1: if-else
function func1() {
    if (true) {
        var x = 10;
    }
    console.log(x);
}

func1();
//10

//Example 2: loops
function func2() {
    for (var index = 0; index < 10; index++) {
    }
    console.log(index);
}

func2();
//10

//let and consts are block scoped. E.g.-
//Example 1: if-else
function func1() {
    if (true) {
        let x = 10;
        const y = 20;
    }
    console.log(x);
    console.log(y);
}

func1()
//Uncaught ReferenceError: x is not defined
//Uncaught ReferenceError: y is not defined

//Example 2: loops
function func2() {
    for (let index = 0; index < 10; index++) {
    }
    console.log(index);
}

func2();
//Uncaught ReferenceError: index is not defined


//3. Hoisting
//All declarations (function, var, let, const and class) are hoisted in JavaScript, 
//while the var declarations are initialized with undefined, 
//but let and const declarations remain uninitialized. E.g.-
//Example 1: var hoisting
console.log(var_x);
var var_x = 10;
//undefined

//because var is hoisted like this-
var var_x;
console.log(var_x);
var_x = 10;

//Example 2: let, const
console.log(let_x);
let let_x = 10;
//ReferenceError: let_x is not defined
console.log(const_x);
const const_x = 10;
//ReferenceError: const_x is not defined


//4. Initialization
//const is required to be initialized at the time declaration E.g.-
const a;
a = 10;
console.log(a);
//Uncaught SyntaxError: Missing initializer in const declaration

//var and let can be initialized after the declaration
let a;
a = 10;
console.log(a);
//10

var a;
a = 10;
console.log(a);
//10


//5. var variables can be found in window object. 
//Same is not valid for let and const
var x = 10;
let y = 20;
const z = 30;
console.log(window.x);
console.log(window.y);
console.log(window.z);
//10
//undefined
//undefined
