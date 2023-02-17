module.exports = {
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  extends: [
    'next/core-web-vitals',
    'airbnb-base',
    'airbnb-typescript',
    'plugin:prettier/recommended',
  ],
  rules: {
    'no-underscore-dangle': false,
    'import/prefer-default-export': false,
    '@typescript-eslint/no-use-before-define': false,
    'no-param-reassign': false,
  },
};
