let result

try {
  // Attempt to parse a JSON string
  result = JSON.parse('{"name":"John"}')
} catch (error) {
  // Handle potential errors from parsing
  console.error('Parsing error:', error.message)
  result = null
} finally {
  // This block gets executed regardless of whether there was an error or not
  console.log('Parsing attempt finished.')
}

console.log(result) // Outputs: { name: 'John' }
