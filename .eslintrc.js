module.exports = {
    "extends": "airbnb",
    "rules": {
        "semi": ["error", "never"],
        "import/no-unresolved": 2,
        "import/extensions": ["error", "ignorePackages", {
          "js": "never",
          "mjs": "never",
          "jsx": "never"
        }],
        "react/jsx-uses-react": 2,
        "react/jsx-filename-extension": 0,
        "react/prefer-stateless-function": [<enabled>, { "ignorePureComponents": true }]
      }
};