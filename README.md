# JavaScript Library Boilerplate

A simple ES6 Library starter kit.

## What's included?

- **Rollup** and **Babel** transform code
- **Eslint** with Airbnb to lint code
- **Jest** for writing tests
- Run lint and tests before each commit with **husky**

## Avaiable `yarn`|`npm` commands

```json
{
  "start": "npm run test -- --watch",
  "test": "jest",
  "lint": "eslint .",
  "clean": "rimraf lib",
  "build": "npm run clean && npm run lint && npm run test && rollup -c"
}
```
