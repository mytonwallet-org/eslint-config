module.exports = {
  "extends": [
    "@mytonwallet/eslint-config/common"
  ],
  "rules": {
    "@typescript-eslint/lines-between-class-members": "off",
    "simple-import-sort/imports": [
      "error",
      {
        "groups": [
          [
            "^ton",
            "^tonweb(/.*|$)",
            "^@?\\w",
            "dist(/.*|$)",
            "^(\\.+/)+(lib)(/.*|$)"
          ],
          [
            "^(\\.+/|\\w+/)+(types)(/.*|$)",
            "^(\\.+/|\\w+/)+(types)\\u0000"
          ],
          [
            "^(\\.+/)+config",
            "^(\\.+/)+(global)(/.*|$)",
            "^(\\.+/)+(util)(/.*|$)",
            "^(\\.+/)+(contracts)(/.*|$)",
            "^(\\.+/)+(ui)/[a-z](([a-z]+[A-Z]?)*)",
            "^\\.\\.(?!/?$)",
            "^\\.\\./?$",
            "^\\./(?=.*/)(?!/?$)",
            "^\\.(?!/?$)",
            "^\\./?$"
          ],
          [
            "\/[A-Z](([a-z]+[A-Z]?)*)"
          ]
        ]
      }
    ]
  }
};
