module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": "airbnb-base",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "project": "./tsconfig.json",
        "sourceType": "module"
    },
    "parser": "@typescript-eslint/parser",
    "plugins": ["oclif"],
    "rules": {
        "semi": ["error", "never"]
    }
};