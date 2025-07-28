export default {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier
    'prettier', // Disables ESLint rules that conflict with Prettier
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['vue', 'prettier'],
  rules: {
    'vue/multi-word-component-names': 'off',
    'prettier/prettier': 'error', // Shows Prettier errors as ESLint errors
  },
}
