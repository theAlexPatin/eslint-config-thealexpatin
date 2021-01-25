module.exports = {
  plugins: ['xss'],
  rules: {
    'xss/no-location-href-assign': [
      'error',
      {
        escapeFunc: 'encodeURIComponent',
      },
    ],
    'xss/no-mixed-html': 'error',
  },
}
