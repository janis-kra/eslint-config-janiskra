module.exports = {
    "extends": "airbnb-base",
    "installedESLint": true,
    "plugins": [
        "async-await",
        "no-inferred-method-name"
    ],
    "settings": {
        "ecmascript": 6
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "esversion":6
        }
    },
    "rules": {
        "async-await/space-after-async": ["error", "always"],
        "async-await/space-after-await": ["error", "always"],
        "comma-dangle": ["error", "never"],
        "object-curly-spacing": ["error", "always"],
        "object-shorthand": ["error", "never"],
        "space-before-function-paren": ["error", "always"]
    }
};
