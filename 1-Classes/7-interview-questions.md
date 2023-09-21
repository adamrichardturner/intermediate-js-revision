# Object-Oriented Programming & JavaScript Interview Questions

## OOP Basics

### 1. What is Object-Oriented Programming?

**Answer:** Object-Oriented Programming (OOP) is a programming paradigm that uses objects and classes for organizing code. It focuses on encapsulating data and behavior into reusable and modular entities.

### 2. List and explain the four main principles of OOP.

**Answer:**

- **Encapsulation:** Bundling data (attributes) and methods (functions) that operate on the data into single units called classes. It also restricts direct access to some of the object's components, ensuring data integrity.
- **Abstraction:** Hiding the complex implementation details and showing only the essential features of an object, allowing for more simplified interface and reducing complexity.
- **Inheritance:** It allows a class to inherit properties and methods from another class, promoting code reusability and establishing relationships between the parent and child classes.
- **Polymorphism:** Allows objects of different classes to be treated as if they were objects of a common superclass. It's the ability of a single function or method to work in different ways based on the input or on the object it's called on.

## JavaScript and OOP

### 3. How does JavaScript support OOP?

**Answer:** JavaScript is prototype-based, which is a style of OOP. It has objects, and it allows for inheritance through prototypes. With the introduction of ES6, JavaScript introduced "classes" as syntactical sugar over its prototype-based inheritance, making it look more similar to traditional OOP languages.

### 4. Explain prototypal inheritance in JavaScript.

**Answer:** In JavaScript, each object can have another object as its prototype. An object can inherit properties from its prototype, and the prototype itself can have its own prototype, creating a prototype chain. When a property or method is accessed on an object, JavaScript will look up the prototype chain until it finds the property/method or reaches an object with a `null` prototype.

### 5. How do you create a class in JavaScript using ES6 syntax?

**Answer:**

```javascript
class MyClass {
  constructor(param1, param2) {
    this.property1 = param1
    this.property2 = param2
  }

  myMethod() {
    return `This is ${this.property1} and ${this.property2}`
  }
}
```

This ES6 syntax provides a more concise and familiar way for defining classes, especially for developers coming from other OOP languages.

### 6. What is the difference between class and function constructors in JavaScript?

**Answer:** In JavaScript, both class and function can be used to create object constructors. However:

- The class syntax introduced in ES6 provides a cleaner and more concise way to define classes and inherit from other classes.
- Function constructors are the traditional way of creating classes in JavaScript. They work with the new keyword and allow objects to be - instantiated from them.
- With class, methods are added to the prototype automatically, whereas, with function constructors, you often have to manually add methods to the prototype.
