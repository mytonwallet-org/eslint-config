# MyTonWallet ESLint Configuration

A comprehensive ESLint configuration for Teact/TypeScript projects used by MyTonWallet.

## Available Configurations

- **`backendRecommended`** - Plain TypeScript configuration for backend projects
- **`frontendRecommended`** - Full-featured configuration with Teact, TypeScript, and all plugins

## Installation

```bash
npm install --save-dev @mytonwallet/eslint-config@https://github.com/mytonwallet-org/eslint-config
```

## Usage

```js
// eslint.config.js
import mtwConfig from '@mytonwallet/eslint-config';

export default eslint.config(
  mtwConfig.configs.frontendRecommended,
  globalIgnores([
    // Your ignored files
    'dist',
  ]),
  {
    // Your custom overrides
    rules: {
      'no-console': 'warn',
    },
  },
);
```
