# Async/Await in JavaScript - Interview Questions and Answers

## 1. What is `async/await` in JavaScript?

**Answer:** `async/await` is a syntactic sugar over promises in JavaScript that allows for asynchronous code to be written in a more synchronous fashion. It makes asynchronous code more readable and easier to maintain.

## 2. How do you declare an `async` function?

**Answer:** An `async` function is declared using the `async` keyword before the `function` keyword.

```javascript
async function fetchData() {
  // ...
}
```

## 3. What does an `async` function return?

**Answer:** An `async` function always returns a Promise. If the return value is not a Promise, it will be automatically wrapped in a Promise.

## 4. How do you use the `await` keyword?

**Answer:** The `await` keyword can only be used inside an `async` function and is used to pause the execution of the function until the Promise is resolved or rejected.

```javascript
async function fetchData() {
  const data = await someAsynchronousFunction()
  console.log(data)
}
```

## 5. What happens when an error is thrown inside an `async` function?

**Answer:** If an error is thrown inside an `async` function, the Promise returned by the function will be rejected with the thrown error. You can handle this error using a `.catch()` or with a try/catch block inside the function.

## 6. How can you handle errors with `async/await`?

**Answer:**
The common approach is to use a try/catch block inside the `async` function.

```javascript
async function fetchData() {
  try {
    const data = await someAsynchronousFunction()
    console.log(data)
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}
```

## 7. How can you run multiple asynchronous operations concurrently with `async/await`?

**Answer:**
To run multiple asynchronous operations concurrently, you can use `Promise.all()`.

```javascript
async function fetchMultipleData() {
  const [data1, data2] = await Promise.all([fetchData1(), fetchData2()])
  console.log(data1, data2)
}
```

## 8. What is the potential pitfall of using `async/await`?

**Answer:** One potential pitfall is inadvertently turning parallelizable operations into sequential ones by awaiting them one by one, which can affect performance. It's essential to know when to run promises concurrently.

---

Note: Understanding the behavior and potential pitfalls of `async/await` is crucial for writing efficient and readable asynchronous JavaScript code.
