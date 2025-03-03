# MyTonWallet ESLint configurations

Available configurations:

- `mytonwallet/config-frontend`
- `mytonwallet/config-backend`

To use a configuration in your project, first install the package:

```bash
npm install --save-dev https://github.com/mytonwallet-org/eslint-config-mytonwallet
```

Then create an `.eslintrc` with the following content:

```json
{
  "extends": ["mytonwallet/config-frontend"]
}
```
