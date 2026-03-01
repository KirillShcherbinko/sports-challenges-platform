import js from '@eslint/js';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import prettierConfig from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import { defineConfig, globalIgnores } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig([
  // ─────────────────────────────────────────────────────
  // 1. Глобальные игноры
  // ─────────────────────────────────────────────────────
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'node_modules/**',
    'public/**',
    'coverage/**',
    '*.config.js',
    '*.config.mjs',
    '*.config.ts',
    'next-env.d.ts',
    '.eslintcache',
    'pnpm-lock.yaml',
    'package-lock.json',
    'yarn.lock',
  ]),

  // ─────────────────────────────────────────────────────
  // 2. Базовые JS правила
  // ─────────────────────────────────────────────────────
  {
    files: ['**/*.{js,jsx,mjs,cjs}'],
    ...js.configs.recommended,
  },

  // ─────────────────────────────────────────────────────
  // 3. TypeScript конфигурация
  // ─────────────────────────────────────────────────────
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-non-null-assertion': 'warn',
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/ban-ts-comment': 'warn',
    },
  },

  // ─────────────────────────────────────────────────────
  // 4. React конфигурация
  // ─────────────────────────────────────────────────────
  {
    files: ['**/*.{jsx,tsx}'],
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off', // Next.js App Router не требует
      'react/prop-types': 'off', // Используем TypeScript вместо PropTypes
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/no-unescaped-entities': 'off',
    },
  },

  // ─────────────────────────────────────────────────────
  // 5. Next.js официальные конфиги
  // ─────────────────────────────────────────────────────
  ...nextVitals,
  ...nextTs,

  // ─────────────────────────────────────────────────────
  // 6. Import plugin (для проверки циклических зависимостей)
  // ─────────────────────────────────────────────────────
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      import: importPlugin,
    },
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
        node: true,
      },
    },
    rules: {
      'import/no-duplicates': 'error',
      'import/no-cycle': ['error', { maxDepth: 10 }],
      'import/prefer-default-export': 'off',
      'import/no-unresolved': 'off',
      'import/order': 'off',
    },
  },

  // ─────────────────────────────────────────────────────
  // 7. Prettier (должен быть ПОСЛЕДНИМ, чтобы переопределить всё)
  // ─────────────────────────────────────────────────────
  {
    files: ['**/*.{js,jsx,ts,tsx,json,css,md}'],
    ...prettierConfig,
  },

  // ─────────────────────────────────────────────────────
  // 8. FSD Boundaries — проверка архитектуры
  // ─────────────────────────────────────────────────────
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      boundaries: await import('eslint-plugin-boundaries'),
    },
    rules: {
      'boundaries/element-types': [
        'error',
        {
          default: 'allow',
          rules: [
            {
              target: 'entities',
              allow: ['shared', 'entities'],
            },
            {
              target: 'features',
              allow: ['shared', 'entities', 'features'],
            },
            {
              target: 'widgets',
              allow: ['shared', 'entities', 'features', 'widgets'],
            },
            {
              target: 'pages',
              allow: ['shared', 'entities', 'features', 'widgets', 'pages'],
            },
          ],
        },
      ],
    },
  },
]);
