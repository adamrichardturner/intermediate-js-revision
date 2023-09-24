// Import the functions from encryptors.js here.
const encryptors = require('./encryptors.js')

const { caesarCipher, symbolCipher, reverseCipher } = encryptors

// User Input / Output Logic
/////////////////////////////////////////////

const encryptionMethod = getEncryptionMethod()
process.stdin.on('data', (userInput) => {
  displayEncryptedMessage(encryptionMethod, userInput)
})

/* Helper function for determining which cipher method
the user chose when they ran the program. */
function getEncryptionMethod() {
  let encryptionMethod

  const encryptionType = process.argv[2]
  if (encryptionType === 'symbol') {
    encryptionMethod = symbolCipher
  } else if (encryptionType === 'reverse') {
    encryptionMethod = reverseCipher
  } else if (encryptionType === 'caesar') {
    let amount = Number(process.argv[3])
    if (Number.isNaN(amount)) {
      process.stdout.write(`Try again with a valid amount argument. \n`)
      process.exit()
    }
    encryptionMethod = (str) => caesarCipher(str, amount)
  } else {
    process.stdout.write(`Try again with a valid encryption type. \n`)
    process.exit()
  }

  process.stdout.write('Enter the message you would like to encrypt...\n> ')
  return encryptionMethod
}

/* Helper function for displaying the encrypted message to the user. */
function displayEncryptedMessage(encryptionMethod, userInput) {
  let str = userInput.toString().trim()
  let output = encryptionMethod(str)
  process.stdout.write(`\nHere is your encrypted message:\n> ${output}\n`)
  process.exit()
}
