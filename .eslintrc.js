module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    "jest": true,
  },
  extends: 'airbnb',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  "parser": "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
  },
  plugins: [
    'react',
  ],
  rules: {
    'space-before-function-paren': 'off',
    'no-plusplus' : 'off',
    'prefer-template': 'off',
    'arrow-parens': 'off',
    'max-len': 'off',
    'guard-for-in': 'off',
    'react/jsx-filename-extension': 'off',
    'arrow-body-style' : 'off',
    'import/extensions': 'off',
    'react/destructuring-assignment': 'off',
    'react/prop-types': 'off',
  },
};
