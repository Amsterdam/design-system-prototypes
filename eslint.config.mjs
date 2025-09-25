import { FlatCompat } from '@eslint/eslintrc'
import eslint from '@eslint/js'
import tsParser from '@typescript-eslint/parser'
import perfectionist from 'eslint-plugin-perfectionist'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import tseslint from 'typescript-eslint'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  allConfig: eslint.configs.all,
  baseDirectory: __dirname,
  recommendedConfig: eslint.configs.recommended,
  ...tseslint.configs.recommended,
})

const perfectionistCustomSizesGroups = {
  customGroups: [
    {
      elementNamePattern: '^(x-small|xs)$',
      groupName: 'x-small',
      selector: 'property',
    },
    {
      elementNamePattern: '^(small|s|narrow|phone|min|start)$',
      groupName: 'small',
      selector: 'property',
    },
    {
      elementNamePattern: '^(medium|m|tablet)$',
      groupName: 'medium',
      selector: 'property',
    },
    {
      elementNamePattern: '^(large|l|wide|desktop|max|end)$',
      groupName: 'large',
      selector: 'property',
    },
    {
      elementNamePattern: '^(x-large|xl)$',
      groupName: 'x-large',
      selector: 'property',
    },
    {
      elementNamePattern: '^(2x-large|2xl)$',
      groupName: '2x-large',
      selector: 'property',
    },
  ],
  groups: ['x-small', 'small', 'medium', 'large', 'x-large', '2x-large'],
  useConfigurationIf: {
    allNamesMatchPattern:
      '^(x-small|xs|small|s|narrow|phone|min|start|medium|m|tablet|large|l|wide|desktop|max|x-large|xl|2x-large|2xl|end)$',
  },
}

export default tseslint.config(
  {
    files: ['*.mjs'],
    languageOptions: {
      parser: '@babel/eslint-parser',
    },
  },
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    ignores: [
      '**/node_modules/',
      '**/vendor/',
      '**/build/',
      '**/coverage/',
      '**/dist/',
      '**/tmp/',
      '**/.next',
      '**/out',
    ],
  },
  ...compat.extends(
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:@next/next/recommended',
  ),
  {
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        project: ['./tsconfig.json'],
      },

      sourceType: 'module',
    },
    plugins: {
      perfectionist,
    },
    rules: {
      'import/prefer-default-export': 'off',
      'jsx-a11y/anchor-is-valid': 'off',
      'react/jsx-filename-extension': [
        1,
        {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      ],
      'react/jsx-key': 'off',
      'react/no-unknown-property': 'off',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/require-default-props': 'off',
      ...perfectionist.configs['recommended-natural'].rules,
      'perfectionist/sort-modules': 'off', // This impacts readability in a negative way. We want to decide the order of modules ourselves.
      'perfectionist/sort-object-types': ['error', perfectionistCustomSizesGroups],
      'perfectionist/sort-objects': [
        'error',
        perfectionistCustomSizesGroups,
        {
          customGroups: [
            {
              elementNamePattern: '^title$',
              groupName: 'title',
              selector: 'property',
            },
            {
              elementNamePattern: '^component$',
              groupName: 'component',
              selector: 'property',
            },
          ],
          groups: ['title', 'component'],
        },
      ],
      'perfectionist/sort-union-types': 'off', // This causes more issues than it solves
      'sort-imports': [
        'error',
        {
          allowSeparatedGroups: false,
          ignoreCase: true,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
        },
      ],
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
      react: { version: 'detect' },
    },
  },
)
