class Animal {
  constructor(name) {
    this._name = name
    this._behavior = 0
  }

  // The static keyword ensures this method can only be called on the
  // class itself and not any instance of it
  static generateName() {
    const names = ['Angel', 'Spike', 'Buffy', 'Willow', 'Tara']
    const randomNumber = Math.floor(Math.random() * 5)
    return names[randomNumber]
  }
}

console.log(Animal.generateName()) // returns a name

const tyson = new Animal('Tyson')
tyson.generateName() // TypeError
