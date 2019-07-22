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

//Redeclare same variables
let foo = 20;
console.log(foo);
var bar = 30;
console.log(bar);
const baz = 40;
console.log(baz);
//Error : Uncaught SyntaxError: Identifier 'foo' has already been declared
//30
//Error : Uncaught SyntaxError: Identifier 'foo' has already been declared

//Assign some other values
foo = 20;
console.log(foo);
bar = 30;
console.log(bar);
baz = 40;
console.log(baz);
//20
//30
//Uncaught TypeError: Assignment to constant variable.

//Conclusion : 
//1. We can not redeclare the let and const variables
//2. We can re assign the value in let but can not in const.


//2. Scope



//3. Hoisting