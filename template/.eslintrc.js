module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:jest-dom/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
  },
  plugins: [
    'jest',
    'react',
    'react-hooks',
    '@typescript-eslint',
    'prettier',
    'import',
    'simple-import-sort',
  ],
  root: true,
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 88,
        semi: false,
        parser: 'typescript',
        trailingComma: 'all',
        singleQuote: true,
      },
    ],
    'simple-import-sort/sort': 'error', // Enabling simple-import-sort
    'sort-imports': 'off', // Disable sorting rule to avoid conflict with simple-import-sort
    'import/order': 'off', // Disable sorting rule to avoid conflict with simple-import-sort
    'import/prefer-default-export': 'error',
  },
}
