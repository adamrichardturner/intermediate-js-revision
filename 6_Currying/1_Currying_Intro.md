# Currying in JavaScript: A Tutorial

Currying is a functional programming concept that takes a function with multiple arguments and transforms it into a series of unary functions (functions that accept only one argument).

Currying can make your code more readable and allows you to create specialized versions of functions easily.

## Basic Concept:

Let's say you have a function that takes three arguments:

```javascript
function sum(a, b, c) {
  return a + b + c
}
```

Currying would break this function down into a series of unary functions:

```javascript
function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c
    }
  }
}
```

Now, the `sum` function can be invoked like this:

```javascript
sum(1)(2)(3) // Returns 6
```

## Detailed Example:

Let's dive into an example to understand how currying works:

```javascript
// Our original function
function multiply(a, b, c) {
return a _ b _ c;
}

// Curried version
function curriedMultiply(a) {
return function(b) {
return function(c) {
return a _ b _ c;
}
}
}

const doubleOfProduct = curriedMultiply(2); // Returns a function waiting for `b`.
const doubleOfTen = doubleOfProduct(10); // Returns a function waiting for `c`.
const result = doubleOfTen(3); // Returns 60 (2 _ 10 _ 3).
```

## Creating a Generic Currying Function:

Rather than manually currying every function, we can create a generic function that auto-curries for us:

```javascript
function curry(fn, ...args) {
  if (args.length >= fn.length) {
    return fn(...args)
  } else {
    return function (...newArgs) {
      return curry(fn, ...args, ...newArgs)
    }
  }
}

// Usage:
const curriedSum = curry(sum)
console.log(curriedSum(1)(2)(3)) // Outputs: 6
```

This `curry` function checks if the number of arguments given to it is sufficient. If it is, it invokes the original function; if not, it returns another function waiting for more arguments.

## Wrapping Up:

Currying is a powerful functional programming tool. It might seem counterintuitive at first, but once you get the hang of it, it can significantly improve code readability and reusability.
