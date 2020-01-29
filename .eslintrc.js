module.exports = {
  "env": {
    "es6": true,
    "node": true,
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "rules": {
    "indent": [
      "error",
      2,
      { "SwitchCase": 1 }
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "never"
    ],
    "camelcase": 0,
    "no-console": "error",
    "no-case-declarations": 0,
    "space-infix-ops": "error",
    "array-bracket-spacing": ["error", "never"],
    "space-in-parens": ["error", "never"],
    "key-spacing": ["error", { "afterColon": true }],
    "comma-spacing": ["error", { "before": false, "after": true }],
    "max-len": [
      "error",
      { "code": 120, "ignoreComments": true, "ignoreTrailingComments": true }
    ],
    "object-curly-spacing": [
      "error",
      "always",
      {
        "arraysInObjects": true,
        "objectsInObjects": true
      }
    ]
  }
};
