module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    jest: true,
    node: true,
  },
  extends: [
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jsdoc/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/babel',
    'eslint:recommended',
  ],
  overrides: [
    {
      files: ['**.js', '**.json', '**.ts', '**.tsx', '**.jsx'],
      rules: {
        'jsdoc/require-returns': 'off',
        'sort-keys-fix/sort-keys-fix': 'error',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 2021,
    parser: 'babel-eslint',
    sourceType: 'module',
  },
  plugins: [
    'babel',
    'prettier',
    'import',
    'jsdoc',
    'only-error',
    'sort-keys-fix',
  ],
  root: true,
  rules: {
    'comma-dangle': 'off',
    'import/order': [
      'error',
      {
        alphabetize: {
          caseInsensitive: true,
          order: 'asc',
        },
        groups: [
          'external',
          'builtin',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always-and-inside-groups',
        pathGroups: [
          {
            group: 'internal',
            pattern: '@/**',
          },
          {
            group: 'builtin',
            pattern: '~/**',
          },
        ],
      },
    ],
    'no-console': 'error',
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false,
      },
    ],
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
      },
    ],
  },
  settings: {
    'import/resolver': {
      alias: {
        extensions: ['.ts', 'tsx', '.graphql', '.js', '.jsx', '.json', '.vue'],
        map: [
          ['@', './src'],
          ['~', './'],
        ],
      },
    },
  },
}
