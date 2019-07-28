//1. find()
//find() is used to find the element from the array. For E.g.-
let items = [1, 2, 3, 4, 5, 5, 6];
console.log(items.find((item) => item == 5));
//5

//It will return first element if predicate condition is true
//If condition is false than it will return the undefined. for E.g.-

console.log(items.find((item) => item == 7));
//undefined

//find() can be used for array of objects. For E.g.-
let items_of_objects = [{ name: 'a' }, { name: 'b' }, { name: 'c' }];
console.log(items_of_objects.find((item) => item.name === 'c'));
//{ name: 'c' }

//2. filter()
//filter method is used to filter out all elements(array) which
//matches the predicate conditions. For E.g.-
items = [1, 2, 3, 4, 5, 5, 6];
console.log(items.filter((item) => item == 5));
//[ 5, 5 ]

//It will always return an array whether the condition is maches or not.
// It will return blank array([]) if predicate condition is false. For E.g.-
console.log(items.filter((item) => item == 0));
//[]

//like find(), filter() can be used for array of objects. For E.g.-
//find() can be used for array of objects. For E.g.-
items_of_objects = [{ name: 'a' }, { name: 'b' }, { name: 'c' }];
console.log(items_of_objects.filter((item) => item.name === 'c'));
[{ name: 'c' }]

//Conclusion
//1. find() is used to find element in array whereas filter() is used to filter out the elements from array.
//2. find() will always return a element/object which matches the condition whereas filter() will return all elements(in array) which matches the conditions.
//3. find() will return undefined whereas filter() will return blank array if predicate condition if false.
