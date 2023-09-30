# JavaScript Promises: A Step-by-Step Guide

```javascript
// 1. Creating a Promise
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (true) {
      resolve('Success!')
    } else {
      reject('Error!')
    }
  }, 2000)
})

// 2. Consuming a Promise
myPromise
  .then((result) => {
    console.log(result) // logs: 'Success!'
  })
  .catch((error) => {
    console.error(error)
  })

// 3. Chaining Promises
const step1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('Step 1 complete!'), 1000)
  })
}

const step2 = (input) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(input + ' Step 2 complete!'), 1000)
  })
}

step1()
  .then((result) => step2(result))
  .then((finalResult) => {
    console.log(finalResult)
  })
  .catch((error) => {
    console.error(error)
  })

// 4. Promise Static Methods

// 4.1. Promise.all()
const promise1 = new Promise((resolve) =>
  setTimeout(() => resolve('Promise 1'), 1000)
)
const promise2 = new Promise((resolve) =>
  setTimeout(() => resolve('Promise 2'), 2000)
)

Promise.all([promise1, promise2])
  .then((results) => {
    console.log(results)
  })
  .catch((error) => {
    console.error(error)
  })

// 4.2. Promise.race()
const promiseA = new Promise((resolve) =>
  setTimeout(() => resolve('Promise A wins!'), 1500)
)
const promiseB = new Promise((resolve) =>
  setTimeout(() => resolve('Promise B wins!'), 1000)
)

Promise.race([promiseA, promiseB])
  .then((result) => {
    console.log(result)
  })
  .catch((error) => {
    console.error(error)
  })

// 5. Async/Await
const asyncFunction = async () => {
  try {
    const result = await step1()
    const finalResult = await step2(result)
    console.log(finalResult)
  } catch (error) {
    console.error(error)
  }
}

asyncFunction()
```
