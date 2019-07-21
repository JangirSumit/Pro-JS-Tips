# Console Logging Pro Tips

```
const foo = { name: 'foo', age: 10 };
const bar = { name: 'bar', age: 20 };
const baz = { name: 'baz', age: 30 };
```

1. Logging
```
console.log(foo);
console.log(bar);
console.log(baz);
//{ name: 'foo', age: 10 }
//{ name: 'bar', age: 20 }
//{ name: 'baz', age: 30 }

Pro Logging
console.log(foo, bar, baz)
//{ name: 'foo', age: 10 } { name: 'bar', age: 20 } { name: 'baz', age: 30 }
```

2. Styling in Console.log
```
console.log('%c Hello from Console', 'color: orange; font-weight: bold;')
//Hello from Console
```

3. Tabular Data
```
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
```

4. Execution Time
```
console.time('Process')
let i = 0;
while (i < 1000000) { i++ }
console.timeEnd('Process')
//Process: 4.166ms
```


5. Conditional logging : Will print in console only if first argument is false
```
console.assert(1 == 2, 'Hello');
//Assertion failed: Hello 
console.assert(1 == 1, 'Hello')
// < No Logging >
```

6. Count number of times console.count() is called inside a loop
```
for (i = 0; i < 10; i++) {
    console.count();
}
/*
default: 1
default: 2
default: 3
default: 4
default: 5
default: 6
default: 7
default: 8
default: 9
default: 10
*/
```

7.  Grouping
```
/*
The console.group() method indicates the start of a message group.
All messages will from now on be written inside this group.
Tip: Use the console.groupEnd() method to end the group.
Tip: Use the console.groupCollapsed() method to hide the message group (collapsed by default).
*/
console.log("Hello world!");
console.group();
console.log("Hello again, this time inside a group!");
console.groupEnd();
console.log("and we are back.");
/*
Hello world!
  Hello again, this time inside a group!
and we are back.
*/
```
