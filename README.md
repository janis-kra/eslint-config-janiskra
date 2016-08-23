# eslint-config-janiskra

My custom eslint rules, extending the [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb).

## Rules

``` js
"rules": {
    "async-await/space-after-async": ["error", "always"],
    "async-await/space-after-await": ["error", "always"],
    "comma-dangle": ["error", "never"],
    "object-curly-spacing": ["error", "always"],
    "object-shorthand": ["error", "never"],
    "space-before-function-paren": ["error", "always"]
}
```

I use the `async-await` and `no-inferred-method-name` plugins for enforcing spaces after the async/await keywords and disallowing anonymous inner functions.

## Usage

There are two versions, `base` and `react`. For now, the main difference is that the former extends `airbnb/base` while the latter extends `airbnb` (i.e. it uses all the react stuff that you do not need for, say, a node.js project).

### base

.eslintrc:
``` js
{
    "extends": "eslint-config-janiskra/base"
}
```

### react

.eslintrc:
``` js
{
    "extends": "eslint-config-janiskra/react"
}
```
