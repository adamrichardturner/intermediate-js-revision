const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344,
}

// myExecutor takes 2 arguments, resolve and reject
function myExecutor(resolve, reject) {
  if (inventory.sunglasses > 0) {
    // Resolve is our success handler
    resolve('Sunglasses order processed.')
  } else {
    // And reject is our failure handler
    reject('That item is sold out.')
  }
}

// orderSunglasses returns a new Promise object with
// myExecutor passed in as an argument
function orderSunglasses() {
  return new Promise(myExecutor)
}

const orderPromise = orderSunglasses()

console.log(orderPromise) // Logs the Promise resolution
