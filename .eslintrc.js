module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: ['@nuxtjs', 'plugin:vue/recommended'],
  plugins: ['vue', 'vuetify'],
  rules: {
    'no-console': 'off',
    'no-param-reassign': 'off',
    'import/no-extraneous-dependencies': 'off',
    'vuetify/no-deprecated-classes': 'error',
    'vue/multi-word-component-names': 0

  }
}
