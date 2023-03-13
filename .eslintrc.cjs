module.exports = {
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  extends: [
    'airbnb-base',
    'airbnb-typescript',
    'plugin:prettier/recommended',
    'prettier'
  ],
  rules: {
    'no-underscore-dangle': false,
    'import/prefer-default-export': false,
    '@typescript-eslint/no-use-before-define': false,
    'no-param-reassign': false,
  },
};
