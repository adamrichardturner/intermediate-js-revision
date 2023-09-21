class Media {
  // Constructor is called each time class is instantiated
  constructor(title) {
    // Properties defined with _ are meant to not be accessed directly
    this._title = title
    this._isCheckedOut = false
    this._ratings = []
  }

  // Getters and setters
  get title() {
    return this._title
  }

  get ratings() {
    return this._ratings
  }

  get isCheckedOut() {
    return this._isCheckedOut
  }

  set isCheckedOut(status) {
    this._isCheckedOut = status
  }

  // Methods
  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut
  }

  getAverageRating() {
    return this._ratings.reduce((a, b) => a + b, 0) / this._ratings.length
  }

  addRating(rating) {
    this._ratings.push(rating)
  }
}

// Child class of Media called Book inherits its properties and methods
class Book extends Media {
  constructor(author, title, pages) {
    // super keyword is used to call the constructor of the parent class Media
    super(title)
    // Unique properties are defined here
    this._author = author
    this._pages = pages
  }

  get author() {
    return this._author
  }

  get pages() {
    return this._pages
  }
}

class Movie extends Media {
  constructor(director, title, runTime) {
    super(title)
    this._director = director
    this._runTime = runTime
  }

  get director() {
    return this._director
  }

  get runTime() {
    return this._runTime
  }
}

class CD extends Media {
  constructor(artist, title, songs) {
    super(title)
    this._artist = artist
    this._songs = songs
  }

  get artist() {
    return this._artist
  }

  get songs() {
    return this._songs
  }
}

// Here we create a new Book object
const historyOfEverything = new Book(
  'Bill Bryson',
  'A Short History of Nearly Everything',
  544
)
historyOfEverything.toggleCheckOutStatus() // isCheckedOut is now true
console.log(historyOfEverything.isCheckedOut) // true
historyOfEverything.addRating(4) // adds ratings to the ratings array
historyOfEverything.addRating(5)
historyOfEverything.addRating(5)
console.log(historyOfEverything.getAverageRating()) // Gets the average ratings
