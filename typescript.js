module.exports = {
  extends: ['./base.js'],
  overrides: [
    {
      env: { browser: true, es6: true, node: true },
      extends: [
        './base.js',
        'standard-with-typescript',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
        'plugin:import/typescript',
      ],
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2020,
        project: './tsconfig.json',
        sourceType: 'module',
      },
      plugins: ['prettier', '@typescript-eslint'],
      rules: {
        '@typescript-eslint/semi': ['error'],
        '@typescript-eslint/strict-boolean-expressions': 'off',
        'jsdoc/require-param-type': 'off',
        'prettier/prettier': [
          'error',
          {
            semi: false,
            singleQuote: true,
          },
        ],
        semi: 'off',
      },
    },
  ],
}
