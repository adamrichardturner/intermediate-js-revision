// A mock function that simulates an asynchronous action
function fetchData(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Data for ID: ${id}`)
    }, 1000)
  })
}

// An async function that uses the above asynchronous action
async function getData(id) {
  // execution pauses until the promise is resolved at the await
  // keyword
  try {
    const data = await fetchData(id)
    console.log(data)
  } catch (error) {
    console.error('An error occurred:', error)
  }
}

// Call the async function
getData(123) // After 1 second, this will log: "Data for ID: 123"
