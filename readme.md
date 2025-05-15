# MyTonWallet ESLint configurations

Available configurations:

- `@mytonwallet/eslint-config/frontend`
- `@mytonwallet/esling-config/backend`

To use a configuration in your project, first install the package:

```bash
npm install --save-dev https://github.com/mytonwallet-org/eslint-config
```

Then create an `.eslintrc` with the following content:

```json
{
  "extends": ["@mytonwallet/esling-config/frontend"]
}
```
