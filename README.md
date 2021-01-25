# eslint-config-thealexpatin [![](https://badge.fury.io/js/eslint-config-thealexpatin.svg)](https://npmjs.org/package/eslint-config-thealexpatin) [![](https://www.travis-ci.com/theAlexPatin/eslint-config-thealexpatin.svg?branch=master)](https://travis-ci.com/theAlexPatin/eslint-config-thealexpatin)

> Alex Patin's preferred [`eslint`](https://eslint.org) configurations

## Requirements

- `eslint >7.X.X`

## Basic Usage

**Install**

```bash
$ npm install -D eslint-config-thealexpatin
```

**Create `.eslintrc.js`**

```js
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
- `vue` (for ES6)
- `vue-with-typescript`
