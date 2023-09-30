class School {
  // The constructor is called each time the class is instantiated
  constructor(name, level, numberOfStudents) {
    // Properties assigned to this instance of the instantiation
    this._name = name
    this._level = level
    this._numberOfStudents = numberOfStudents
  }

  // Getters return the values of the properties
  get name() {
    return this._name
  }

  get level() {
    return this._level
  }

  get numberOfStudents() {
    return this._numberOfStudents
  }

  // Setter will modify properties in this case numberOfStudents
  set numberOfStudents(num) {
    if (typeof num === 'number') {
      this._numberOfStudents = num
    } else {
      return 'Invalid input: numberOfStudents must be set to a Number.'
    }
  }

  // Method to log basic information about schools
  quickFacts() {
    return `${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`
  }

  // Static methods can only be called on the class itself and not any instance
  static pickSubstituteTeacher(substituteTeachers) {
    console.log(
      substituteTeachers[
        Math.floor(Math.random() * substituteTeachers.length - 1)
      ]
    )
  }
}

// The PrimarySchool class inherits School's properties and methods via the extends keyword
class PrimarySchool extends School {
  // The constructor should contain all relevant inherited and unique properties to the child class
  constructor(name, numberOfStudents, pickupPolicy) {
    // Super calls the parent constructor, we pass 'primary' as the argument for level in the parent class
    super(name, 'primary', numberOfStudents)
    // Only one unique property is defined as this._pickupPolicy
    this._pickupPolicy = pickupPolicy
  }

  // A unique getter is required for pickupPolicy as the parent class did not define that property
  get pickupPolicy() {
    return this._pickupPolicy
  }
}

class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, 'high', numberOfStudents)
    this._sportsTeams = sportsTeams
  }

  get sportsTeams() {
    return this._sportsTeams
  }
}

// Instantiate a new instance of PrimarySchool
const lorraineHansbury = new PrimarySchool(
  'Lorraine Hansbury',
  514,
  'Students must be picked up by a parent, guardian, or a family member over the age of 13.'
)

// Call the quickFacts method
console.log(lorraineHansbury.quickFacts())

// Call the PrimarySchool static method pickSubstituteTeacher here
PrimarySchool.pickSubstituteTeacher([
  'Jamal Crawford',
  'Lou Williams',
  'J. R. Smith',
  'James Harden',
  'Jason Terry',
  'Manu Ginobli',
])

// Assign an instance of HighSchool to alSmith
const alSmith = new HighSchool('Al E. Smith', 415, [
  'Baseball',
  'Basketball',
  'Volleyball',
  'Track and Field',
])

// Call the get sportsTeams method
console.log(alSmith.sportsTeams)
