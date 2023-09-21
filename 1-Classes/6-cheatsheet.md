# Object-Oriented Programming (OOP) and JavaScript Cheatsheet

## Basic Concepts of OOP:

1. **Class**: Blueprint for creating objects.
2. **Object**: Instance of a class.
3. **Inheritance**: One class inherits properties and methods from another class.
4. **Polymorphism**: One interface for many data types or functions.
5. **Encapsulation**: Bundling data and methods that operate on that data into a single unit.
6. **Abstraction**: Simplifying complex systems by breaking them into smaller, more manageable parts.

## JavaScript and Prototypes:

1. JS is prototype-based, not class-based.
2. Every object has a prototype, and objects inherit methods and properties from their prototypes.

## ES6 Classes:

ES6 introduced a new syntax for creating classes in JS.

```javascript
class MyClass {
  constructor(arg1, arg2) {
    this.prop1 = arg1
    this.prop2 = arg2
  }

  myMethod() {
    console.log('This is a method!')
  }
}
```

## Instantiating Objects

```javascript
const obj = new MyClass('value1', 'value2')
```

## Inheritance in ES6

```javascript
class ChildClass extends MyClass {
  childMethod() {
    console.log('This is a child method!')
  }
}
```

## Getters and Setters

```javascript
class MyClass {
  constructor() {
    this._prop = null
  }

  get prop() {
    return this._prop
  }

  set prop(value) {
    this._prop = value
  }
}
```

## Static Methods

Belong to the class, not an instance of the class.

```javascript
class MyClass {
  static staticMethod() {
    console.log('This is a static method!')
  }
}
```

## Private Methods

Prefix with # to make fields or methods private.

```javascript
class MyClass {
  #privateField = 'I am private'

  #privateMethod() {
    console.log('This is a private method!')
  }
}
```

## Polymorphism in JavaScript

Mostly achieved through method overriding or using different implementations for the same method name in different objects.

## Mixins

A way to make objects use a combination of methods from different sources.

```javascript
let mixin = {
  sayHi() {
    console.log(`Hello ${this.name}`)
  },
}

class MyClass {
  constructor(name) {
    this.name = name
  }
}

Object.assign(MyClass.prototype, mixin)

const obj = new MyClass('John')
obj.sayHi() // Hello John
```

## Encapsulation and Abstraction

Use closures, modules, or the newer private class fields and methods.

## Benefits of OOP in JS:

1. Organized and modular code.
2. Easier to debug and maintain.
3. Promotes code reuse and DRY (Don't Repeat Yourself) principle.
4. More intuitive representation of real-world entities.

## Potential Drawbacks:

1. Overhead of understanding prototype-based inheritance.
2. Performance concerns in some cases.
3. Over-engineering or creating overly complex architectures.
