## Browser-based JavaScript Modules: Import and Export Guide

Modern browsers support the ES6 module system natively. This allows you to split your JavaScript code into smaller, reusable modules.

### 1. ES6 Modules

#### Exporting

**Named Exports:**

```javascript
// myModule.js

export const functionName = () => {
  console.log('This is a function from myModule')
}

export { functionName } // You can also export like this
```

**Default Export (only one per module):**

```javascript
// anotherModule.js

export default function () {
  console.log('This is the default export function')
}
```

#### Importing

When using modules in a browser, you need to specify the `type="module"` attribute on your `<script>` tags.

**HTML File:**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ES6 Modules in Browser</title>
  </head>
  <body>
    <script type="module" src="./main.js"></script>
  </body>
</html>
```

**In your main.js (or whatever you name it) you can now use ES6 imports:**

```javascript
import { functionName } from './myModule.js'

functionName() // Outputs: 'This is a function from myModule'
```

**For Default Import:**

```javascript
import defaultFunction from './anotherModule.js'

defaultFunction() // Outputs: 'This is the default export function'
```

---

Note: Not all browsers support ES6 modules, so always ensure compatibility based on your target audience. If needed, tools like Webpack, Rollup, or Babel can be used to bundle and/or transpile your code for broader compatibility.

Always use the full path with the `.js` extension when importing in browsers as they do not have the same module resolution as Node.js.
