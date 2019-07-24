//1. for...of statement is used to iterate over the values in an iterable, like an array. For E.g.-

let names = ['A', 'B', 'C', 'D', 'E'];

for (let name of names) {
    console.log(name);
}
//A
//B
//C
//D
//E

//Strings are also an iterable type, so you can use for…of on strings. For E.g.-

let str = 'abcde';

for (let char of str) {
    console.log(char.toUpperCase());
}
//A
//B
//C
//D
//E

//2. for...in statement is used to iterate over the properties of an object (the object keys). For E.g.-

let employee = {
    name: 'John',
    age: 20,
    salary: 1000
};

for (let key in employee) {
    console.log(`${key} --> ${employee[key]}`);
}
//name --> John
//age --> 20
//salary --> 1000

//You can also use for…in to iterate over the index values of an iterable like an array or a string. For E.g.-

let text = 'Turn the page';

for (let index in text) {
    console.log(`Index of ${text[index]}: ${index}`);
}

//Index of T: 0
//Index of u: 1
//Index of r: 2
//Index of n: 3
//Index of  : 4
//Index of t: 5
//Index of h: 6
//Index of e: 7
//Index of  : 8
//Index of p: 9
//Index of a: 10
//Index of g: 11
//Index of e: 12