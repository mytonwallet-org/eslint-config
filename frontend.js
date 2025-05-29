import eslint from '@eslint/js';
import stylisticJs from '@stylistic/eslint-plugin';
import importsPlugin from 'eslint-plugin-import';
import jestPlugin from 'eslint-plugin-jest';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import noNullPlugin from 'eslint-plugin-no-null';
import reactPlugin from 'eslint-plugin-react';
import reactHooksStaticDeps from 'eslint-plugin-react-hooks-static-deps';
import reactXPlugin from 'eslint-plugin-react-x';
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';
import tseslint from 'typescript-eslint';

const recommended = tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  tseslint.configs.stylistic,
  reactPlugin.configs.flat.recommended,
  reactXPlugin.configs['recommended-type-checked'],
  jsxA11yPlugin.flatConfigs.recommended,
  stylisticJs.configs.customize({
    semi: true,
    arrowParens: 'always',
    braceStyle: '1tbs',
    quoteProps: 'as-needed',
  }),
  {
    name: 'mtw-eslint-config/recommended',
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    settings: {
      react: {
        version: '19',
      },
    },
    rules: {
      'no-null/no-null': 'error',
      'no-console': 'error',
      'no-template-curly-in-string': 'error',
      'object-shorthand': 'error',
      curly: ['error', 'multi-line'],
      'no-prototype-builtins': 'off',
      'no-undef': 'off',
      'no-unused-vars': 'off',
      '@stylistic/max-len': ['error', {
        code: 120,
        ignoreComments: true,
        ignorePattern: '\\sd=".+"', // Ignore lines with "d" attribute
      }],
      '@stylistic/indent': ['error', 2, {
        SwitchCase: 1,
        flatTernaryExpressions: false,
      }],
      '@stylistic/multiline-ternary': 'off',
      '@stylistic/jsx-one-expression-per-line': 'off',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // Side effect imports
            ['^\\u0000'],
            // Lib and global imports
            [
              '^react',
              '^ton',
              '^tonweb(/.*|$)',
              '^qr-code-styling(/.*|$)',
              '^@?\\w',
              'dist(/.*|$)',
              '^(\\.+/)+(lib/teact)(/.*|$)',
              '^(\\.+/)+global$',
            ],
            // Type imports
            [
              '^(\\.+/)+.+\\u0000$',
              '^(\\.+/|\\w+/)+(types)(/.*|$)',
              '^(\\.+/|\\w+/)+(types)\\u0000',
            ],
            // Config, utils, helpers
            [
              '^(\\.+/)+config',
              '^(\\.+/)+(lib)(?!/teact)(/.*|$)',
              '^(\\.+/)+global/.+',
              '^(\\.+/)+(util)(/.*|$)',
              '^(\\.+/)+(contracts)(/.*|$)',
              '^\\.\\.(?!/?$)',
              '^\\.\\./?$',
              '^\\./(?=.*/)(?!/?$)',
              '^\\.(?!/?$)',
              '^\\./?$',
            ],
            // Hooks
            [
              '.+(/hooks/)(.*|$)',
            ],
            // Components
            [
              '/[A-Z](([a-z]+[A-Z]?)*)',
            ],
            // Styles and CSS modules
            [
              '^.+\\.s?css$',
            ],
            // Assets: images, stickers, etc
            [
              '^(\\.+/)+(assets)(/.*|$)',
            ],
          ],
        },
      ],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          disallowTypeAnnotations: false,
        },
      ],
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/prefer-for-of': 'off',
      '@typescript-eslint/array-type': 'off',
      '@typescript-eslint/no-misused-promises': [
        'error',
        {
          checksVoidReturn: false,
        },
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'none',
          caughtErrors: 'none',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/prefer-promise-reject-errors': 'off',
      '@typescript-eslint/unbound-method': 'off',
      'unused-imports/no-unused-imports': 'error',
      'react-hooks/exhaustive-deps': 'off',
      'react-hooks-static-deps/exhaustive-deps': [
        'error',
        {
          // eslint-disable-next-line @stylistic/max-len
          additionalHooks: '(useSyncEffect|useAsync|useDebouncedCallback|useThrottledCallback|useEffectWithPrevDeps|useLayoutEffectWithPrevDeps|useDerivedState|useDerivedSignal|useThrottledResolver|useDebouncedResolver|useThrottleForHeavyAnimation)$',
          staticHooks: {
            getActions: true,
            useFlag: [false, true, true],
            useForceUpdate: true,
            useReducer: [false, true],
            useLastCallback: true,
          },
        },
      ],
      'react/prop-types': 'off',
      'react/no-unknown-property': 'off',
      'react/display-name': 'off',
      'react/jsx-key': 'off',
      'react/jsx-curly-spacing': [
        'error',
        {
          when: 'never',
          attributes: true,
          children: true,
          allowMultiline: true,
        },
      ],
      'react-x/no-use-context': 'off',
      'react-x/no-context-provider': 'off',
      'react-x/no-array-index-key': 'off',
      'react-x/no-missing-key': 'off',
      'react-x/no-nested-component-definitions': 'off',
      'react-x/no-leaked-conditional-rendering': 'error',
      'jsx-a11y/click-events-have-key-events': 'off',
      'jsx-a11y/mouse-events-have-key-events': 'off',
      'jsx-a11y/no-static-element-interactions': 'off',
      'jsx-a11y/label-has-associated-control': 'off',
      'jsx-a11y/anchor-is-valid': 'off',
      'jsx-a11y/no-noninteractive-element-to-interactive-role': 'off',
      'jsx-a11y/media-has-caption': 'off',
    },
    plugins: {
      'no-null': noNullPlugin,
      'simple-import-sort': simpleImportSortPlugin,
      import: importsPlugin,
      'unused-imports': unusedImports,
      react: reactPlugin,
      'react-hooks-static-deps': reactHooksStaticDeps,
      jest: jestPlugin,
    },
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
      globals: jestPlugin.environments.globals.globals,
    },
  },
);

export default recommended;
