// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    'standard'
  ],
  // add your custom rules here
  rules: {
    'indent': [0, 4],//缩进风格
    // allow async-await
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'eol-last': 0,
    'camelcase': 0,
    'space-before-function-paren': 0
  }
}