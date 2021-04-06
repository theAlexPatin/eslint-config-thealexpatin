# eslint-config-thealexpatin[![](https://badge.fury.io/js/eslint-config-thealexpatin.svg)](https://npmjs.org/package/eslint-config-thealexpatin)

> My personal ESLint configurations [`eslint`](https://eslint.org) configurations

## Requirements

- `eslint >7.X.X`

## Basic Usage

**Install**

```bash
$ npm install -D eslint-config-thealexpatin
```

**Create `.eslintrc.js`**

```javascript
// .eslintrc.js

module.exports = {
  extends: ["thealexpatin/<extension name>"],
};
```

## Available Extensions

- `es6`
- `typescript`
- `react` (for ES6)
- `react-with-typescript`
- `react-native` (for ES6)
- `react-native-with-typescript`
- `vue` (for ES6)
- `vue-with-typescript`

## Examples

```javascript
// .eslintrc.js

module.exports = {
  extends: ["thealexpatin/typescript"],
};
```

```javascript
// .eslintrc.js

module.exports = {
  extends: ["thealexpatin/react-with-typescript"],
};
```
