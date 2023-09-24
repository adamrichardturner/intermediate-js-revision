## Node.js Modules: Import and Export Guide

Modules allow you to break your code into reusable parts. In Node.js, you can use the CommonJS (up to ES5) or ES6 (and newer) module system to accomplish this.

### 1. CommonJS (Used primarily in Node.js up to ES5)

#### Exporting

```javascript
// myModule.js

module.exports = {
  functionName: function () {
    console.log('This is a function from myModule')
  },
}
```

#### Importing

```javascript
const myModule = require('./myModule')

myModule.functionName() // Outputs: 'This is a function from myModule'
```

### 2. ES6 Modules (ES6 and newer)

#### Exporting

**Named Exports:**

```javascript
// myModule.js

export const functionName = () => {
  console.log('This is a function from myModule')
}
```

**Default Export (only one per module):**

```javascript
// anotherModule.js

export default function () {
  console.log('This is the default export function')
}
```

#### Importing

**Named Imports:**

```javascript
import { functionName } from './myModule'

functionName() // Outputs: 'This is a function from myModule'
```

**Default Import:**

```javascript
import defaultFunction from './anotherModule'

defaultFunction() // Outputs: 'This is the default export function'
```

---

Note: If you are using ES6 Modules in Node.js, ensure you are on a version that supports it, or you might need tools like Babel to transpile your code. You also might need to set `"type": "module"` in your `package.json`.

Remember, the paths used in `require()` or `import` might need to be adjusted based on your project structure.
