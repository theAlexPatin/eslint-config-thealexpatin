# `eslint-config-thealexpatin` [![](https://badge.fury.io/js/eslint-config-thealexpatin.svg)](https://npmjs.org/package/eslint-config-thealexpatin) [![](https://www.travis-ci.com/theAlexPatin/eslint-config-thealexpatin.svg?branch=master)](https://travis-ci.com/theAlexPatin/eslint-config-thealexpatin)

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
	extends: ["thealexpatin"],
}
```

## Environment-Specific Extensions

**TypeScript**

```js
// .eslintrc.js

module.exports = {
	extends: ["thealexpatin/typescript"],
}
```

**Vue**

```js
// .eslintrc.js

module.exports = {
	extends: ["thealexpatin/vue"],
}
```

**React**

```js
// .eslintrc.js

module.exports = {
	extends: ["thealexpatin/react"],
}
```

**Combine Configs**

```js
// .eslintrc.js

module.exports = {
	extends: ["thealexpatin/react", "thealexpatin/typescript"],
}
```
