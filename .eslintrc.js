module.exports = 
    {
        "extends": ["airbnb"],
        "rules": {
          "react/no-multi-comp": 0,
          "react/prefer-stateless-function": 0,
          "import/default": 0,
          "import/no-duplicates": 0,
          "import/named": 0,
          "import/namespace": 0,
          "import/no-unresolved": 0,
          "import/no-named-as-default": 2,
          "comma-dangle": 2,
          "indent": [2, 2, {"SwitchCase": 1}],
          "no-console": 0,
          "no-alert": 0,
          "strict": 0,
          "class-methods-use-this": 0,
          "arrow-body-style": [2, "as-needed"],
          "no-confusing-arrow": [2, {"allowParens": true}],
          "react/prop-types": 2,
          "jsx-a11y/href-no-hash": "off",
          "jsx-a11y/anchor-is-valid": ["warn", { "aspects": ["invalidHref"] }],
          "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
          "object-curly-spacing": [2, "always"],
          "react/jsx-curly-spacing": [2, {"when": "always"}],
          "react/jsx-closing-bracket-location": [1, "line-aligned"],
          
          "react/prop-types": ["error", { "ignore": ["navigation"] }]
          
        },
    };
