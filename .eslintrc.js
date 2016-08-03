module.exports = {
    "extends": "airbnb",
    "installedESLint": true,
    "plugins": [
        "no-inferred-method-name"
    ],
    "settings": {
        "ecmascript": 6
    },
    "rules": {
        "space-before-function-paren": ["error", "always"],
        "object-curly-spacing": ["error", "always"],
        "comma-dangle": ["error", "never"],
        "object-shorthand": ["error", "never"]
    }
};
