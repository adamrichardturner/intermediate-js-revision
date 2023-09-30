# JavaScript Promises - Interview Questions and Answers

## 1. What is a Promise in JavaScript?

**Answer:** A Promise is a JavaScript object representing the eventual completion (or failure) of an asynchronous operation and its resulting value. A Promise can be in one of three states: pending, resolved (fulfilled), or rejected.

## 2. How do you create a Promise?

**Answer:** A Promise is created using the `Promise` constructor which takes a single function as its argument. This function should have two parameters: `resolve` and `reject`.

```javascript
const myPromise = new Promise((resolve, reject) => {
  // asynchronous operation
  if (operationSuccess) {
    resolve(value)
  } else {
    reject(error)
  }
})
```

## 3. How can you handle the results or errors from a Promise?

**Answer:** Promises have `then` and `catch` methods to handle the results and errors respectively.

```javascript
myPromise
  .then((result) => {
    console.log('Success:', result)
  })
  .catch((error) => {
    console.log('Error:', error)
  })
```

## 4. What is the `finally` method on a Promise?

**Answer:** The `finally` method allows you to execute a block of code regardless of whether the promise was resolved or rejected. It's typically used for cleanup or to finalize certain operations.

```javascript
myPromise
  .then((result) => {
    console.log('Success:', result)
  })
  .catch((error) => {
    console.log('Error:', error)
  })
  .finally(() => {
    console.log('Promise operation is complete.')
  })
```

## 5. Explain `Promise.all` and its use cases.

**Answer:** `Promise.all` is a method that takes an iterable of promises and returns a single Promise that resolves when all of the promises have resolved, or rejects with the reason of the first promise that rejects.
Use cases include waiting for multiple asynchronous operations to complete before proceeding.

```javascript
Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log('All promises resolved with values:', values)
  })
  .catch((error) => {
    console.log('One of the promises rejected with error:', error)
  })
```

## 6. What is `Promise.race`?

**Answer:** `Promise.race` is a method that takes an iterable of promises and returns a promise that resolves or rejects as soon as one of the promises in the iterable resolves or rejects, with the value or reason from that promise.

```javascript
Promise.race([promise1, promise2])
  .then((value) => {
    console.log('First promise to resolve:', value)
  })
  .catch((error) => {
    console.log('First promise to reject:', error)
  })
```

## 7. How can you create a resolved or rejected Promise immediately?

**Answer:**
You can use `Promise.resolve(value)` to create a Promise that is immediately resolved with the given value. Similarly, `Promise.reject(reason)` creates a Promise that is immediately rejected with the given reason.

```javascript
const resolved = Promise.resolve('Resolved value')
const rejected = Promise.reject('Rejection reason')
```

## 8. What is the difference between a callback and a Promise?

**Answer:**

- **Callback:** A function passed into another function as an argument to be executed later. Callbacks can lead to callback hell or pyramid of doom when nested multiple times.
- **Promise:** Provides a more readable and maintainable way to handle asynchronous operations compared to callbacks. Promises allow for better chaining and error handling.

---
