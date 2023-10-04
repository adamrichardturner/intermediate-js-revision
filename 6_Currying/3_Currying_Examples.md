# Currying in JavaScript with Examples

Currying is the technique of converting a function that takes multiple arguments into a series of functions that each take a single argument. Here are some clear examples:

## 1. Basic Currying

Converting a simple `add` function:

```javascript
function add(a, b) {
  return a + b
}

const curriedAdd = (a) => (b) => a + b

console.log(curriedAdd(5)(3)) // Outputs: 8
```

## 2. Advanced Currying

Converting a function that multiplies three numbers:

```javascript
function multiply(a, b, c) {
return a _ b _ c;
}

const curriedMultiply = a => b => c => a _ b _ c;

console.log(curriedMultiply(2)(3)(4)); // Outputs: 24
```

## 3. Practical Use Case - Filtering

Using currying to create specialized filter functions:

```javascript
const filter = (predicate) => (arr) => arr.filter(predicate)

const isEven = (num) => num % 2 === 0
const filterEven = filter(isEven)

console.log(filterEven([1, 2, 3, 4, 5])) // Outputs: [2, 4]
```

## 4. Using a Generic Currying Helper

A function to automatically curry other functions:

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

In summary, currying is a valuable technique in functional programming that provides flexibility, reusability, and often clearer intent in your code.
