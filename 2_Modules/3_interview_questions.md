# JavaScript Modules - Interview Questions and Answers

## 1. What are JavaScript modules?

**Answer:** JavaScript modules are individual units of independent, reusable code. They allow developers to split their code into smaller pieces, each responsible for a distinct functionality. Modules can be imported and exported from one file to another, which facilitates a more organized and maintainable codebase.

## 2. How do you create a module in JavaScript?

**Answer:** A module in JavaScript can be created by simply using the `export` keyword to export variables, functions, or classes from a file. For example:

```javascript
// module.js
export const name = 'ChatGPT'
export function greet() {
  console.log('Hello from ChatGPT!')
}
```

## 3. What is the difference between named exports and default exports?

**Answer:**

- **Named exports:** These allow multiple exports per module. Importing named exports requires the use of curly braces (`{ }`).

  ```javascript
  // exporting
  export const name = 'ChatGPT'
  // importing
  import { name } from './module'
  ```

- **Default exports:** A module can have only one default export. Importing it does not require curly braces.
  ```javascript
  // exporting
  export default function () {
    console.log('Hello!')
  }
  // importing
  import greet from './module'
  ```

## 4. How can you import a module in JavaScript?

**Answer:** To import a module in JavaScript, you can use the `import` statement. Here's how you do it:

```javascript
// Named exports
import { functionName, variableName } from 'module-name'

// Default exports
import DefaultFunctionOrClass from 'module-name'
```

## 5. What is the role of `import *` in module imports?

**Answer:** The `import *` syntax allows you to import everything from a module as an object. Each export from the module will be a property on this object.

```javascript
import * as utilities from './utilities'
console.log(utilities.functionName())
```

## 6. How do dynamic imports work in JavaScript?

**Answer:** Dynamic imports allow you to load modules on-demand by using the `import()` function. It returns a promise that resolves to the imported module. It's useful for code splitting and lazy-loading modules.

```javascript
async function loadModule() {
  const module = await import('./dynamicModule')
  module.functionName()
}
```

## 7. Can you explain the difference between CommonJS and ES6 Modules?

**Answer:**

- **CommonJS (CJS):** Primarily used in Node.js. Modules are loaded synchronously and processed in the order they occur. It uses `require()` to import modules and `module.exports` to export.
- **ES6 Modules (ESM):** The standard module system in ECMAScript 6 and later. It's asynchronous and uses `import`/`export` syntax. ESM has static structure which means you can determine imports and exports at compile time, leading to better optimization opportunities.

## 8. How can you make a module available globally in the browser?

**Answer:** To make a module available globally in the browser, you can assign the module (or its exports) to a property on the `window` object. For instance:

```javascript
import * as myModule from './myModule'
window.myModule = myModule
```

Remember, while this approach makes the module accessible globally, it's often discouraged because it can clutter the global namespace and lead to conflicts.

---
