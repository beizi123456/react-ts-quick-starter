const OFF = 0
const WARN = 1
const ERROR = 2
module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended",
        "prettier",
        "prettier/@typescript-eslint",
        "prettier/react",
        "prettier/unicorn",
    ],
    "parser": "@typescript-eslint/parser",
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "settings": {
      "import/resolver": {
        "node": {
          "extensions": [".tsx", ".ts", ".js", ".json"],
        },
      },
    },
  
    "plugins": [
        "react",
        "unicorn",
        "promise", 
        "@typescript-eslint"
    ],
    "rules": {
      'import/extensions': [
        ERROR,
        'ignorePackages',
        {
          ts: 'never',
          tsx: 'never',
          json: 'never',
          js: 'never',
        },
      ],
    }
}
