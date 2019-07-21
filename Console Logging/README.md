# Console Logging Pro Tips

const foo = { name: 'foo', age: 10 };
const bar = { name: 'bar', age: 20 };
const baz = { name: 'baz', age: 30 };

//1. Logging
console.log(foo);
console.log(bar);
console.log(baz);
//{ name: 'foo', age: 10 }
//{ name: 'bar', age: 20 }
//{ name: 'baz', age: 30 }

// Pro Logging
console.log(foo, bar, baz)
//{ name: 'foo', age: 10 } { name: 'bar', age: 20 } { name: 'baz', age: 30 }


//2. Styling in Console.log
console.log('%c Hello from Console', 'color: orange; font-weight: bold;')
//Hello from Console


//3. Tabular Data
console.table([foo, bar, baz])
/*
┌─────────┬───────┬─────┐
│ (index) │ name  │ age │
├─────────┼───────┼─────┤
│    0    │ 'foo' │ 10  │
│    1    │ 'bar' │ 20  │
│    2    │ 'baz' │ 30  │
└─────────┴───────┴─────┘
*/


//4. Execution Time 
console.time('Process')
let i = 0;
while (i < 1000000) { i++ }
console.timeEnd('Process')
//Process: 4.166ms
