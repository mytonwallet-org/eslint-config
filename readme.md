# MyTonWallet ESLint Configuration

A comprehensive ESLint configuration for Teact/TypeScript projects used by MyTonWallet.

## Available Configurations

### Frontend Configuration

- **`frontendRecommended`** - Full-featured configuration with Teact, TypeScript, and all plugins

## Installation

```bash
npm install --save-dev @mytonwallet/eslint-config@https://github.com/mytonwallet-org/eslint-config
```

## Usage

```js
// eslint.config.js
import { configs } from '@mytonwallet/eslint-config/frontend';

export default [
  ...configs.frontendRecommended,
  {
    // Your custom overrides
    rules: {
      'no-console': 'warn',
    },
  },
];
```
