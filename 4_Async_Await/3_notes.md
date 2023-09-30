# Async/Await in JavaScript - Notes & Code Snippets

## `async` Function Declaration

An `async` function is a function declared with the `async` keyword.

```javascript
async function fetchData() {
  //...
}
```

## Return Value of `async` Function

`async` functions always return a Promise, even if you return a non-promise value.

```javascript
async function returnString() {
  return 'Hello'
}
console.log(returnString()) // Promise {<fulfilled>: "Hello"}
```

## The `await` Keyword

The `await` keyword can only be used inside an `async` function. It pauses the execution until the Promise resolves.

```javascript
const result = await someAsyncFunction()
```

## Error Handling

Errors in `async/await` can be handled using a try/catch block.

```javascript
async function fetchData() {
  try {
    const data = await someAsyncFunction()
  } catch (error) {
    console.error('There was an error:', error)
  }
}
```

## Running Promises Concurrently

Use `Promise.all()` to run multiple promises concurrently.

```javascript
async function fetchAll() {
  const [result1, result2] = await Promise.all([asyncFunc1(), asyncFunc2()])
}
```

## Potential Pitfalls

Be careful not to unintentionally make asynchronous operations run sequentially when they could be run concurrently.

```javascript
// This runs sequentially
const result1 = await asyncFunc1()
const result2 = await asyncFunc2()

// Use Promise.all() to run them concurrently
const [result1, result2] = await Promise.all([asyncFunc1(), asyncFunc2()])
```

---

Remember, `async/await` is just syntactic sugar over Promises and follows the same underlying principles and behaviors.
