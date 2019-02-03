module.exports = {
  plugins: ['@typescript-eslint', 'prettier'],
  parser: '@typescript-eslint/parser',
  env: {
    es6: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  root: true,
  extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
  rules: {
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'no-console': 'off',
    'prettier/prettier': 'error'
  }
}
