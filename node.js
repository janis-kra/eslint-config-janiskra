module.exports = {
  extends: [
    'eslint-config-janiskra/base',
    'plugin:node/recommended'
  ],
  plugins: ['node'],
  rules: {
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: ['**/*test.js', '**/*spec.js']
    }]
  }
};
