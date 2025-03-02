module.exports = {
  "extends": [
    "airbnb-base",
    "airbnb-typescript/base"
  ],
  "plugins": [
    "no-async-without-await",
    "no-null",
    "simple-import-sort"
  ],
  "rules": {
    "indent": [
      "error",
      2,
      {
        "SwitchCase": 1
      }
    ],
    "max-len": [
      "error",
      {
        "code": 120,
        "ignoreComments": true
      }
    ],
    "array-bracket-newline": [
      2,
      "consistent"
    ],
    "no-null/no-null": 2,
    "no-console": "error",
    "semi": "error",
    "no-implicit-coercion": "error",
    "arrow-body-style": "off",
    "no-else-return": "off",
    "no-plusplus": "off",
    "no-void": "off",
    "no-continue": "off",
    "default-case": "off",
    "no-param-reassign": "off",
    "no-prototype-builtins": "off",
    "no-await-in-loop": "off",
    "no-nested-ternary": "off",
    "function-paren-newline": [
      "error",
      "consistent"
    ],
    "prefer-destructuring": "off",
    // Allow for...of. Edited from:
    // https://github.com/airbnb/javascript/blob/b4377fb03089dd7f08955242695860d47f9caab4/packages/eslint-config-airbnb-base/rules/style.js#L333
    "no-restricted-syntax": [
      "error",
      {
        "selector": "ForInStatement",
        "message": "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array."
      },
      {
        "selector": "LabeledStatement",
        "message": "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand."
      },
      {
        "selector": "WithStatement",
        "message": "`with` is disallowed in strict mode because it makes code impossible to predict and optimize."
      }
    ],
    "object-curly-newline": "off",
    "import/no-extraneous-dependencies": "off",
    "import/prefer-default-export": "off",
    "import/named": "off",
    "import/no-webpack-loader-syntax": "off",
    "import/extensions": "off",
    "no-async-without-await/no-async-without-await": 1,
    "@typescript-eslint/no-use-before-define": [
      "error",
      {
        "functions": false
      }
    ],
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/member-delimiter-style": "error",
    "@typescript-eslint/default-param-last": "off",
    "@typescript-eslint/return-await": [
      "error",
      "in-try-catch"
    ],
    "@typescript-eslint/consistent-type-imports": [
      "error",
      {
        "prefer": "type-imports",
        "disallowTypeAnnotations": false
      }
    ]
  },
  "parserOptions": {
    "project": "./tsconfig.json"
  }
};
