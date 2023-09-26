// Simulate an asynchronous task with a promise that resolves after a given duration.
function task1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Result from task1')
    }, 1000) // Simulated 1-second delay
  })
}

function task2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Result from task2')
    }, 1500) // Simulated 1.5-second delay
  })
}

function task3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Result from task3')
    }, 500) // Simulated 0.5-second delay
  })
}

Promise.all([task1(), task2(), task3()])
  .then((results) => {
    console.log('All tasks completed!')
    console.log(results) // This will be an array:
    // ['Result from task1', 'Result from task2', 'Result from task3']
  })
  .catch((error) => {
    console.log('An error occurred:', error)
  })
