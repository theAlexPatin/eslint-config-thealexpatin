module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    jest: true,
    node: true,
  },
  extends: [
    './base.js',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/babel',
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaVersion: 2021,
    parser: 'babel-eslint',
    sourceType: 'module',
  },
  plugins: ['babel', 'prettier'],
  root: true,
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
      },
    ],
  },
}
