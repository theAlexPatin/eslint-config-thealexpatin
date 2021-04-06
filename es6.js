module.exports = {
  extends: ['./base.js'],
  overrides: [
    {
      env: {
        browser: true,
        commonjs: true,
        es2021: true,
        jest: true,
        node: true,
      },
      extends: [
        'plugin:prettier/recommended',
        'prettier',
        'prettier/babel',
        'eslint:recommended',
      ],
      files: ['**/*.js', '**/*.jsx'],
      parserOptions: {
        ecmaVersion: 2021,
        parser: 'babel-eslint',
        sourceType: 'module',
      },
      plugins: ['babel', 'prettier'],
      rules: {
        'prettier/prettier': [
          'error',
          {
            semi: false,
            singleQuote: true,
          },
        ],
      },
    },
  ],
}
