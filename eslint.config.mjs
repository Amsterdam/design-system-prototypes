/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-underscore-dangle */
import { fileURLToPath } from 'node:url'
import { FlatCompat } from '@eslint/eslintrc'
import eslint from '@eslint/js'
import path from 'node:path'
import tseslint from 'typescript-eslint'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: eslint.configs.recommended,
  allConfig: eslint.configs.all,
  ...tseslint.configs.recommended,
})

export default tseslint.config(
  {
    ignores: ['**/node_modules/', '**/vendor/', '**/build/', '**/coverage/', '**/dist/', '**/tmp/'],
  },
  ...compat.extends(
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:@next/next/recommended',
  ),
  {
    languageOptions: {
      ecmaVersion: 5,
      sourceType: 'module',

      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
    rules: {
      'jsx-a11y/anchor-is-valid': 'off',
      'import/prefer-default-export': 'off',
      'react/jsx-filename-extension': [
        1,
        {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      ],
      'react/require-default-props': 'off',
      'react/no-unknown-property': 'off',
      'react/prop-types': 'off',
      'react/jsx-key': 'off',
      'react/react-in-jsx-scope': 'off',
    },
  },
)
