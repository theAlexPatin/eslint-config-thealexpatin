module.exports = {
  extends: [
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jsdoc/recommended',
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
  plugins: ['import', 'jsdoc', 'sort-keys-fix'],
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
