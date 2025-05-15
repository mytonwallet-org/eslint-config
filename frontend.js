module.exports = {
  "extends": [
    "react-app",
    "plugin:teactn/recommended",
    "@mytonwallet/eslint-config/common"
  ],
  "plugins": [
    "jsx-expressions",
    "teactn",
    "react-hooks-static-deps"
  ],
  "rules": {
    "react-hooks/exhaustive-deps": "off",
    "react-hooks-static-deps/exhaustive-deps": [
      "error",
      {
        "additionalHooks": "(useSyncEffect|useAsync|useDebouncedCallback|useThrottledCallback|useEffectWithPrevDeps|useLayoutEffectWithPrevDeps|useDerivedState|useDerivedSignal|useThrottledResolver|useDebouncedResolver)$",
        "staticHooks": {
          "getActions": true,
          "useFlag": [
            false,
            true,
            true,
          ],
          "useForceUpdate": true,
          "useReducer": [
            false,
            true,
          ],
          "useLastCallback": true,
        },
      },
    ],
    "react/jsx-key": [2, { "checkFragmentShorthand": true}],
    "react/button-has-type": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/function-component-definition": "off",
    "react/no-is-mounted": "off",
    "react/prop-types": "off",
    "react/require-default-props": "off",
    // Teact feature
    "react/style-prop-object": "off",
    "react/no-unknown-property": "off",
    "react/jsx-no-bind": [
      "error",
      {
        "ignoreRefs": true,
        "allowArrowFunctions": false,
        "allowFunctions": false,
        "allowBind": false,
        "ignoreDOMComponents": true
      },
    ],
    "jsx-expressions/strict-logical-expressions": [
      "error",
      {
        "allowString": true
      },
    ],
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/no-noninteractive-element-to-interactive-role": "off",
    "jsx-a11y/media-has-caption": "off",
    "simple-import-sort/imports": [
      "error",
      {
        "groups": [
          // Side effect imports
          ["^\\u0000"],
          // Lib and global imports
          [
            "^react",
            "^ton",
            "^tonweb(/.*|$)",
            "^qr-code-styling(/.*|$)",
            "^@?\\w",
            "dist(/.*|$)",
            "^(\\.+/)+(lib/teact)(/.*|$)",
            "^(\\.+/)+global$"
          ],
          // Type imports
          [
            "^(\\.+/)+.+\\u0000$",
            "^(\\.+/|\\w+/)+(types)(/.*|$)",
            "^(\\.+/|\\w+/)+(types)\\u0000"
          ],
          // Config, utils, helpers
          [
            "^(\\.+/)+config",
            "^(\\.+/)+(lib)(?!/teact)(/.*|$)",
            "^(\\.+/)+global/.+",
            "^(\\.+/)+(util)(/.*|$)",
            "^(\\.+/)+(contracts)(/.*|$)",
            "^\\.\\.(?!/?$)",
            "^\\.\\./?$",
            "^\\./(?=.*/)(?!/?$)",
            "^\\.(?!/?$)",
            "^\\./?$"
          ],
          // Hooks
          [
            ".+(/hooks/)(.*|$)"
          ],
          // Components
          [
            "\/[A-Z](([a-z]+[A-Z]?)*)"
          ],
          // Styles and CSS modules
          [
            "^.+\\.s?css$"
          ],
          // Assets: images, stickers, etc
          [
            "^(\\.+/)+(assets)(/.*|$)"
          ]
        ]
      }
    ]
  },
  "settings": {
    "import/resolver": "webpack"
  }
};
