module.exports = {
  'root': true, // stops eslint from looking further
  'env': {
    'es2021': true, // support for es2021 features
    'node': true, // support for node
  },
  'extends': [
    'google', // google style guide
  ],
  'parserOptions': {
    'ecmaVersion': 'latest', // define js version for parsing
    'sourceType': 'module', // be able to parse module files
  },
  'rules': {
    'max-len': ['error', {'code': 81, 'ignoreComments': false}],
    'linebreak-style': ['error', 'unix'], // try to change to windows
  },
};
