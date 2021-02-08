# eslint-config-profitboss [![](https://badge.fury.io/js/eslint-config-profitboss.svg)](https://npmjs.org/package/eslint-config-profitboss)

> Standard Profitboss [`eslint`](https://eslint.org) configurations

## Requirements

- `eslint >7.X.X`

## Basic Usage

**Install**

```bash
$ npm install -D eslint-config-profitboss
```

**Create `.eslintrc.js`**

```javascript
// .eslintrc.js

module.exports = {
  extends: ["profitboss/<extension name>"],
};
```

## Available Extensions

- `es6`
- `typescript`
- `react` (for ES6)
- `react-with-typescript`
- `vue` (for ES6)
- `vue-with-typescript`

## Examples

```javascript
// .eslintrc.js

module.exports = {
  extends: ["profitboss/typescript"],
};
```

```javascript
// .eslintrc.js

module.exports = {
  extends: ["profitboss/react-with-typescript"],
};
```
