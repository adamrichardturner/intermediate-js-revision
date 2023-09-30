class Dog {
  // Declares a new class
  // Constructors are called when the class is instantiated
  constructor(name) {
    this._name = name // Properties of the class
    this._behavior = 0 // The _ indicates these variables are intended not for direct access
  }
  // Getter method to indirectly access the _name property on this class
  get name() {
    return this._name
  }
  // Getter method to do the same with _behavior
  get behavior() {
    return this._behavior
  }

  // Method to mutate the _behavior property
  incrementBehavior() {
    this._behavior++
  }
}

const halley = new Dog('Halley') // Create new dog named Halley
console.log(halley.name) // Print name value to console
console.log(halley.behavior) // Print behavior value to console
halley.incrementBehavior() // Add one to behavior
console.log(halley.name) // Print name value to console
console.log(halley.behavior) // Print behavior value to console
