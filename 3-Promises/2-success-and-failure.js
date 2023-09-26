const inventory = {
  sunglasses: 0,
  pants: 1088,
  bags: 1344,
}

// checks if order is in stock and returns a promise with setTimeout
// resolved based on whether the order is in stock or not
const checkInventory = (order) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let inStock = order.every((item) => inventory[item[0]] >= item[1])
      if (inStock) {
        resolve(`Thank you. Your order was successful.`)
      } else {
        reject(
          `We're sorry. Your order could not be completed because some items are sold out.`
        )
      }
    }, 1000)
  })
}

const order = [
  ['sunglasses', 1],
  ['bags', 2],
]

// These two functions log the resolved value
const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue)
}

const handleFailure = (rejectReason) => {
  console.log(rejectReason)
}

// the .then method executes if success and catch executes
// if failed
checkInventory(order).then(handleSuccess).catch(handleFailure)
