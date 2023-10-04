# Top Interview Questions on Currying in JavaScript

Currying is a popular topic in JavaScript interviews, especially when discussing functional programming. Let's explore some of the most frequently asked questions about currying and provide concise answers with code examples.

## 1. What is Currying?

Currying is a technique in functional programming where a function that takes multiple arguments is transformed into a series of unary functions (functions that accept only one argument).

```javascript
function add(a, b) {
  return a + b
}

const curriedAdd = (a) => (b) => a + b

console.log(curriedAdd(5)(3)) // Outputs: 8
```

## 2. Why would one use Currying?

Currying has several benefits:

- **Partial Application**: Currying allows you to fix a certain number of arguments of a function, generating a new function.
- **Enhanced Reusability and Composition**: It becomes easier to generate specialized utility functions.
- **Improved Readability**: By breaking down the logic, it can make the code more declarative.

## 3. Can you provide an example of partial application using Currying?

Certainly! Here's an example using a function to multiply numbers:

```javascript
function multiply(a, b, c) {
return a _ b _ c;
}

const curriedMultiply = a => b => c => a _ b _ c;
const multiplyByTwo = curriedMultiply(2); // fix the first argument as 2
const multiplyByTwoAndThree = multiplyByTwo(3); // fix the second argument as 3

console.log(multiplyByTwoAndThree(4)); // Outputs: 24 (2 _ 3 _ 4)
```

## 4. How can you implement a generic currying function?

A generic currying function can be implemented to handle functions of any arity (number of arguments).

```javascript
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(null, args)
    } else {
      return (...args2) => curried(...args, ...args2)
    }
  }
}

const curriedSum = curry((a, b, c) => a + b + c)
console.log(curriedSum(1)(2)(3)) // Outputs: 6
```

## 5. How is Currying different from Partial Application?

While both concepts allow us to pre-specify some of a function's arguments:

- **Currying**: Always produces nested unary functions. Every application of the function returns another function that takes a single argument, until all arguments are bound.
- **Partial Application**: Can fix any number of arguments in a function without transforming it into unary functions. It deals with producing a function by filling in some of the function's arguments.

```javascript
// Partial application without currying:
function partial(fn, ...presetArgs) {
return (...laterArgs) => fn(...presetArgs, ...laterArgs);
}

const multiply = (a, b, c) => a _ b _ c;
const partialMultiply = partial(multiply, 2, 3);

console.log(partialMultiply(4)); // Outputs: 24
```

## Wrapping Up:

Being well-versed in concepts like currying can set you apart in JavaScript interviews. Understanding both the theory and practical application is essential.
