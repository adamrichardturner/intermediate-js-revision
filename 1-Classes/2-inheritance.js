class Animal {
  constructor(name) {
    this._name = name
    this._behavior = 0
  }

  get name() {
    return this._name
  }

  get behavior() {
    return this._behavior
  }

  incrementBehavior() {
    this._behavior++
  }
}

class Cat extends Animal {
  // Constructor contains all the arguments when the class is instantiated
  constructor(name, usesLitter) {
    // Super calls the parent constructor and assigns its properties to the subclass
    super(name)
    // We still need to define properties unique to the subclass
    this._usesLitter = usesLitter
  }
}

const bryceCat = new Cat('Bryce', false) // Child class instantiated
console.log(bryceCat._name) // output: Bryce
